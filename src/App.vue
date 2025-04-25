<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
let data = ref([]);
const getURL = () => {
  axios
    .get("http://localhost:3000")
    .then(function (response) {
      data.value = response.data;
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
const tableRowClassName = ({ row, rowIndex }) => {
  // 这里可以根据具体条件添加类名
  if (rowIndex % 2 === 0) {
    return "success-row";
  } else {
    return "warning-row";
  }
};
onMounted(() => {
  getURL();
});
</script>


<template>
  <el-table
    :data="data"
    :row-class-name="tableRowClassName"
    style="width: 100%"
  >
    <el-table-column prop="href" label="链接">
      <template v-slot="scope">
        <a :href="scope.row.href" target="_blank">{{ scope.row.href }}</a>
      </template>
    </el-table-column>
    <el-table-column prop="text" label="文本"></el-table-column>
  </el-table>
</template>


<style scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>