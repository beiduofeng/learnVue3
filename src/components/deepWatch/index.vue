<template>
    <deepWatch />
    <!-- <MarkDown :content="computedContent" /> -->
    <CodeWrapper :codeContent="deepWatchCode" />
</template>

<script setup>
//import computedContent from './computed.md?raw';
import deepWatchCode from './deepWatch.vue?raw';
import { CodeWrapper } from '@/common';
import deepWatch from './deepWatch.vue';
</script>

<style scoped></style>