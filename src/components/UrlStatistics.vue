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
        <el-descriptions-item label="总唯一URL数">{{ totalUniqueUrls-1 }}</el-descriptions-item>
        <el-descriptions-item label="层级数">{{ levelCount > 0 ? levelCount - 1 : 0 }}</el-descriptions-item>
      </el-descriptions>

      <!-- 导出按钮区域 -->
      <div class="export-controls">
        <el-button 
          type="primary" 
          :icon="Download" 
          @click="exportToExcel('current')"
          :disabled="!activeTab || !urlsByLevel[activeTab]?.length"
        >
          导出当前层级
        </el-button>
        <el-button 
          type="success" 
          :icon="Download" 
          @click="exportToExcel('all')"
          :disabled="isEmptyData"
        >
          导出全部数据
        </el-button>
        <el-button 
          type="info" 
          :icon="Document"
          @click="exportToExcel('summary')"
          :disabled="isEmptyData"
        >
          导出统计信息
        </el-button>
      </div>

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
import { Download, Document } from '@element-plus/icons-vue';
import * as XLSX from 'xlsx';

export default {
  data() {
    return {
      loading: true,
      error: null,
      isEmptyData: false,
      entryUrl: '',
      totalUniqueUrls: 0,
      startTime: '',
      endTime: '',
      levelCount: 0,
      levels: [],
      urlsByLevel: {},
      activeTab: '',
      loadingTarget: null,
      allUrls: [] // 存储所有URL数据用于导出
    };
  },
  setup() {
    return {
      Download,
      Document
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
      this.entryUrl = '';

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
        
        // 保存所有URL数据用于导出（排除层级0）
        this.allUrls = (data.urls || []).filter(item => parseInt(item.level, 10) > 0);

        // 获取入口URL（层级0的第一个URL）
        const level0Urls = (data.urls || []).filter(item => parseInt(item.level, 10) === 0);
        if (level0Urls.length > 0) {
          this.entryUrl = level0Urls[0].url;
        }

        // 处理层级数据（排除层级0）
        const levelStats = data.level_stats || {};
        this.levels = Object.keys(levelStats)
          .map(level => parseInt(level, 10))
          .filter(level => !isNaN(level) && level > 0)
          .sort((a, b) => a - b)
          .map(level => level.toString());

        // 按层级分组URL（排除层级0）
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
        this.isEmptyData = this.allUrls.length === 0;

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
      return types[Math.min(levelNum - 1, types.length - 1)];
    },
    exportToExcel(type) {
      try {
        let dataToExport = [];
        let fileName = '';

        switch (type) {
          case 'current': // 当前层级
            if (!this.activeTab || !this.urlsByLevel[this.activeTab]) {
              this.$message.warning('当前层级没有数据可导出');
              return;
            }
            dataToExport = this.urlsByLevel[this.activeTab].map((item, index) => ({
              序号: index + 1,
              URL地址: item.url,
              层级: item.level
            }));
            fileName = `层级${this.activeTab}_URL列表`;
            break;
            
          case 'all': // 全部数据
            if (!this.allUrls.length) {
              this.$message.warning('没有数据可导出');
              return;
            }
            dataToExport = this.allUrls.map((item, index) => ({
              序号: index + 1,
              URL地址: item.url,
              层级: item.level
            }));
            fileName = '全部URL列表';
            break;
            
          case 'summary': // 统计信息
            dataToExport = [
              { 属性: '入口URL', 值: this.entryUrl || '无' },
              { 属性: '开始时间', 值: this.startTime },
              { 属性: '结束时间', 值: this.endTime },
              { 属性: '总唯一URL数', 值: this.totalUniqueUrls },
              { 属性: '层级数', 值: this.levelCount > 0 ? this.levelCount - 1 : 0 }
            ];
            fileName = 'URL统计信息';
            break;
        }

        // 创建工作簿和工作表
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, '数据');

        // 设置列宽（自动调整宽度）
        if (type === 'summary') {
          worksheet['!cols'] = [{ wch: 15 }, { wch: 40 }];
        } else {
          const maxUrlLength = Math.max(...dataToExport.map(item => item.URL地址?.length || 0));
          worksheet['!cols'] = [
            { wch: 8 }, // 序号
            { wch: Math.min(Math.max(maxUrlLength, 30), 100) }, // URL地址（限制在30-100字符宽）
            { wch: 8 }  // 层级
          ];
        }

        // 生成Excel文件并下载
        XLSX.writeFile(workbook, `${fileName}_${new Date().toISOString().slice(0, 10)}.xlsx`);
        
        this.$message.success('导出成功！');
      } catch (error) {
        console.error('导出Excel时出错:', error);
        this.$message.error('导出失败: ' + error.message);
      }
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

.export-controls {
  margin: 20px 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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
  
  .export-controls {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>