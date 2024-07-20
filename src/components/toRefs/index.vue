<template>
  <ToRefs />
  <MarkDown :content="toRefsContent" />
  <CodeWrapper :codeContent="toRefCode" />
</template>

<script setup>
import toRefsContent from './torefs.md?raw';
import toRefCode from './toRefs.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import ToRefs from './toRefs.vue';
</script>

<style scoped></style>
