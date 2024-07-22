<template>
  <div class="code-container">
    <div class="tip">{{ props.name }}</div>
    <div v-html="htmlResult"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getCodeHtml } from '@/utils/index';
const props = defineProps({
  codeContent: String,
  name: String,
});


const htmlResult = ref('');

async function setHtmlResult() {
  const code = props.codeContent || '';
  htmlResult.value = await getCodeHtml(code);
}

setHtmlResult();
</script>

<style scoped>
.code-container {
  margin-top: 12px;
  padding: 0px 4px;
  border: 1px solid tomato;
  font-size: 16px;
  background-color: #fff;
  position: relative;
}

.tip {
  /* 绝对定位 */
  position: absolute;
  top: 12px;
  right: 4px;

  font-size: 12px;
  height: 18px;

  /* flex 布局 */
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 60px;
}
</style>
