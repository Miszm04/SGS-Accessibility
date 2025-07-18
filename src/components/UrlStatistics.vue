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
        <!-- 入口URL（原层级0 URL） -->
        <el-descriptions-item v-if="entryUrl" label="入口URL">
          <a :href="entryUrl" target="_blank" rel="noopener noreferrer" class="url-link entry-url">
            {{ entryUrl }}
          </a>
        </el-descriptions-item>
        
        <el-descriptions-item label="开始时间">{{ startTime }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{ endTime }}</el-descriptions-item>
        <el-descriptions-item label="总唯一URL数">{{ totalUniqueUrls }}</el-descriptions-item>
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
      entryUrl: '', // 现在表示层级0的URL（入口URL）
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
      this.loading = true;
      this.error = null;
      this.isEmptyData = false;
      this.urlsByLevel = {};
      this.levels = [];
      this.entryUrl = ''; // 重置入口URL

      try {
        const jsonUrl = '/crawl_results/results.json';
        const response = await fetch(jsonUrl);

        if (!response.ok) {
          throw new Error(`加载失败 (状态码: ${response.status})，请检查文件路径是否正确`);
        }

        let data = await response.json();

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

        // 处理层级数据
        const levelStats = data.level_stats || {};
        this.levels = Object.keys(levelStats)
          .map(level => parseInt(level, 10))
          .filter(level => !isNaN(level))
          .sort((a, b) => a - b)
          .map(level => level.toString());

        // 按层级分组URL
        this.urlsByLevel = this.levels.reduce((acc, level) => {
          const levelNum = parseInt(level, 10);
          acc[level] = data.urls
            .filter(item => parseInt(item.level, 10) === levelNum)
            .map(item => ({
              url: item.url || '未知URL',
              level: item.level || '未知层级'
            }));
          return acc;
        }, {});

        // 设置默认激活的标签页
        this.activeTab = this.levels[0] || '';

        // 检查是否有有效数据
        this.isEmptyData = data.urls.length === 0;

        // 获取入口URL（层级0的第一个URL）
        if (this.urlsByLevel['0'] && this.urlsByLevel['0'].length > 0) {
          this.entryUrl = this.urlsByLevel['0'][0].url;
        }

      } catch (error) {
        this.error = error.message;
        console.error('加载数据时出错:', error);
      } finally {
        this.loading = false;
      }
    },
    getLevelTagType(level) {
      const levelNum = parseInt(level, 10);
      const types = ['primary', 'success', 'info', 'warning', 'danger'];
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
  background-color: #eef1f5;
  color: #202124;
}

.url-link {
  color: #165dff;
  text-decoration: none;
  transition: color 0.2s;
}

.url-link:hover {
  color: #0e42d2;
  text-decoration: underline;
}

.entry-url {
  display: inline-block;
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
}

.loading-container,
.error-container,
.empty-container {
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* 层级标签样式 */
:deep(.el-tag) {
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 4px;
}

:deep(.el-tag--primary) {
  background-color: #165dff;
  color: #ffffff;
}

:deep(.el-tag--success) {
  background-color: #007d40;
  color: #ffffff;
}

:deep(.el-tag--info) {
  background-color: #0c63e4;
  color: #ffffff;
}

:deep(.el-tag--warning) {
  background-color: #e67700;
  color: #ffffff;
}

:deep(.el-tag--danger) {
  background-color: #c92127;
  color: #ffffff;
}

/* 增强文字对比度 */
:deep(.el-descriptions__title) {
  color: #1a1a1a;
  font-weight: 600;
}

:deep(.el-descriptions-item__label) {
  color: #202124;
  font-weight: 500;
}

:deep(.el-descriptions-item__content) {
  color: #1a1a1a;
}

:deep(.el-table th),
:deep(.el-table td) {
  color: #202124;
}

:deep(.el-tabs__item) {
  color: #3c4043;
}

:deep(.el-tabs__item.is-active) {
  color: #165dff;
  font-weight: 500;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  .entry-url {
    max-width: 250px;
  }
}
</style>