<template>
  <!-- 页面上展示 markdown 文件 -->
  <div v-html="htmlResult"></div>
</template>

<script setup>
import { getMarkDownIt } from '../../utils/index';
// 参考 https://vitejs.cn/guide/assets.html#importing-asset-as-string
// vite 通过这种方式直接把 markdown 文件的内容作为字符串引入，非常方便
import content from './index.md?raw'
const md = getMarkDownIt();
// 将 markdown 文件内容 ‘翻译’ 成 html 字符串
const htmlResult = md.render(content);
</script>