// src/main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 确保导入的是带有数据加载逻辑的组件
import UrlStatistics from './components/UrlStatistics.vue' 

createApp(UrlStatistics)
  .use(ElementPlus)
  .mount('#app')