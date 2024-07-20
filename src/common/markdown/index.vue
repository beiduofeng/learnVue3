<template>
  <!-- 页面上展示 markdown 文件 -->
  <div class="markdown-container">
    <div class="tip">md</div>
    <div v-html="htmlResult"></div>
  </div>
</template>

<script setup>
import { getMarkDownIt } from '../../utils/index';
// 参考 https://vitejs.cn/guide/assets.html#importing-asset-as-string
// vite 通过这种方式直接把 markdown 文件的内容作为字符串引入，非常方便
const props = defineProps({ content: String });
const md = getMarkDownIt();
// 将 markdown 文件字符串 ‘翻译’ 成 html 字符串
const htmlResult = md.render(`${props.content}`);
</script>

<style scoped>
.markdown-container {
  min-width: 600px;
  min-height: 400px;
  border: 1px solid tomato;
  padding: 12px;
}

.tip {
  text-align: right;
  font-size: 12px;
}
</style>