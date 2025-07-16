<template>
  <div class="container">
    <div v-if="loading" class="loading-container">
      <el-loading :target="loadingTarget" :fullscreen="false" :lock="true" text="加载中..."></el-loading>
    </div>
    <div v-else-if="error" class="error-container">
      <el-alert title="加载失败" type="error" :description="error" show-icon></el-alert>
      <el-button type="text" @click="loadResults">重试加载</el-button>
    </div>
    <div v-else-if="isEmptyData" class="empty-container">
      <el-empty description="未获取到有效URL数据">
        <template #footer>
          <el-button type="primary" @click="loadResults">重新加载</el-button>
        </template>
      </el-empty>
    </div>
    <div v-else>
      <el-descriptions title="URL统计信息" border>
        <el-descriptions-item label="总唯一URL数">{{ totalUniqueUrls }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{ startTime }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{ endTime }}</el-descriptions-item>
        <el-descriptions-item label="层级数">{{ levelCount }}</el-descriptions-item>
      </el-descriptions>

      <el-tabs type="card" v-model="activeTab" style="margin-top: 20px">
        <el-tab-pane :label="`层级 ${level} (${urlsByLevel[level].length})`" :name="level" v-for="level in levels" :key="level">
          <el-table :data="urlsByLevel[level]" border style="width: 100%; margin-top: 10px" highlight-current-row>
            <el-table-column label="序号" type="index" width="60"></el-table-column>
            <el-table-column label="URL地址" min-width="500" show-overflow-tooltip>
              <template #default="scope">
                <a :href="scope.row.url" target="_blank" rel="noopener noreferrer" class="url-link">
                  {{ scope.row.url }}
                </a>
              </template>
            </el-table-column>
            <el-table-column label="层级" width="100" align="center">
              <template #default="scope">
                <el-tag :type="getLevelTagType(scope.row.level)">{{ scope.row.level }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      error: null,
      isEmptyData: false,
      totalUniqueUrls: 0,
      startTime: '',
      endTime: '',
      levelCount: 0,
      levels: [],
      urlsByLevel: {},
      activeTab: '',
      loadingTarget: null
    };
  },
  mounted() {
    this.loadingTarget = this.$el;
    this.loadResults();
  },
  methods: {
    async loadResults() {
      // 重置状态
      this.loading = true;
      this.error = null;
      this.isEmptyData = false;
      this.urlsByLevel = {};
      this.levels = [];

      try {
        // 使用绝对路径确保请求正确
        const jsonUrl = '/crawl_results/results.json';
        console.log('开始加载数据:', jsonUrl);
        
        const response = await fetch(jsonUrl);
        console.log('请求状态:', response.status, '响应URL:', response.url);

        if (!response.ok) {
          throw new Error(`加载失败 (状态码: ${response.status})，请检查文件路径是否正确`);
        }

        // 解析JSON并验证结构
        let data;
        try {
          data = await response.json();
          console.log('成功解析数据:', data);
        } catch (parseError) {
          throw new Error(`JSON解析失败: ${parseError.message}，请检查文件格式是否正确`);
        }

        // 验证核心数据结构
        if (!data || typeof data !== 'object') {
          throw new Error('数据格式错误，应为JSON对象');
        }
        if (!Array.isArray(data.urls)) {
          throw new Error('数据中缺少urls数组，请检查爬虫输出格式');
        }

        // 处理统计信息
        this.totalUniqueUrls = data.total_urls || 0;
        this.startTime = data.start_time ? new Date(data.start_time).toLocaleString() : '未知';
        this.endTime = data.end_time ? new Date(data.end_time).toLocaleString() : '未知';
        this.levelCount = data.level_stats ? Object.keys(data.level_stats).length : 0;

        // 处理层级数据（兼容各种异常情况）
        const levelStats = data.level_stats || {};
        this.levels = Object.keys(levelStats)
          .map(level => parseInt(level, 10)) // 确保层级为数字
          .filter(level => !isNaN(level)) // 过滤无效层级
          .sort((a, b) => a - b) // 按数字排序
          .map(level => level.toString()); // 转为字符串作为标签页名称

        // 按层级分组URL（兼容level为数字或字符串的情况）
        this.urlsByLevel = this.levels.reduce((acc, level) => {
          const levelNum = parseInt(level, 10);
          acc[level] = data.urls
            .filter(item => {
              // 兼容item.level为数字或字符串的情况
              return parseInt(item.level, 10) === levelNum;
            })
            .map(item => ({
              url: item.url || '未知URL', // 兼容缺失url的情况
              level: item.level || '未知层级'
            }));
          return acc;
        }, {});

        // 设置默认激活的标签页
        this.activeTab = this.levels[0] || '';

        // 检查是否有有效数据
        this.isEmptyData = data.urls.length === 0;
        if (this.isEmptyData) {
          console.log('数据中urls数组为空');
        }

      } catch (error) {
        this.error = error.message;
        console.error('加载数据时出错:', error);
      } finally {
        this.loading = false;
        console.log('加载流程结束');
      }
    },
    getLevelTagType(level) {
      const levelNum = parseInt(level, 10);
      const types = ['primary', 'success', 'info', 'warning', 'danger'];
      // 循环使用标签类型，避免层级过多时无类型可用
      return types[Math.min(levelNum, types.length - 1)];
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.url-link {
  color: #409eff;
  text-decoration: none;
  transition: color 0.2s;
}

.url-link:hover {
  color: #185bb9;
  text-decoration: underline;
}

.loading-container,
.error-container,
.empty-container {
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>