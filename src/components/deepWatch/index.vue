<template>
    <deepWatch />
    <!-- <MarkDown :content="computedContent" /> -->
    <CodeWrapper :codeContent="deepWatchCode" :name="myname" />
</template>

<script setup>
//import computedContent from './computed.md?raw';
import deepWatchCode from './deepWatch.vue?raw';
import { CodeWrapper } from '@/common';
import deepWatch from './deepWatch.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/deepWatch/deepWatch.vue')
</script>

<style scoped></style>