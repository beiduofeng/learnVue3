<template>
  <ToRefs />
  <MarkDown :content="toRefsContent" />
  <CodeWrapper :codeContent="toRefCode" :name="myname" />
</template>

<script setup>
import toRefsContent from './torefs.md?raw';
import toRefCode from './toRefs.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import ToRefs from './toRefs.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/torefs/torefs.vue')
</script>

<style scoped></style>
