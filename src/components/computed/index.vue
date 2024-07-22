<template>
    <Computed />
    <MarkDown :content="computedContent" />
    <CodeWrapper :codeContent="computedCode" :name="myname" />
</template>

<script setup>
import computedContent from './computed.md?raw';
import computedCode from './computed.vue?raw';

import { MarkDown, CodeWrapper } from '@/common';
import Computed from './computed.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/computed/computer.vue')
</script>

<style scoped></style>