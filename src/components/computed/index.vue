<template>
    <Computed />
    <MarkDown :content="computedContent" />
    <CodeWrapper :codeContent="computedCode" />
</template>

<script setup>
import computedContent from './computed.md?raw';
import computedCode from './computed.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import Computed from './computed.vue';
</script>

<style scoped></style>