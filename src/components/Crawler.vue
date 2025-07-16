<template>
  <div class="container">
    <el-descriptions title="URL统计信息" border>
      <el-descriptions-item label="总唯一URL数">{{
        totalUniqueUrls
        }}</el-descriptions-item>
    </el-descriptions>

    <el-table :data="allAbsoluteUrls" border style="width: 100%; margin-top: 20px" fit highlight-current-row>
      <el-table-column label="URL地址" min-width="300" show-overflow-tooltip>
        <template #default="scope">
          <!-- 可跳转的链接，使用a标签包裹 -->
          <a :href="scope.row" target="_blank" rel="noopener noreferrer" class="url-link">
            {{ scope.row }}
          </a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
 
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.url-link {
  color: #409eff;
  /* ElementUI主题色 */
  text-decoration: none;
  transition: color 0.2s;
}

.url-link:hover {
  color: #185bb9;
  /* 悬停时加深颜色 */
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>