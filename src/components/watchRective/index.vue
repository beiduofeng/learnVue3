<template>
    <watchRective />
    <CodeWrapper :codeContent="watchRectiveCode" :name="myname" />
</template>

<script setup>
import watchRectiveCode from './watchRective.vue?raw';
import { CodeWrapper } from '@/common';
import watchRective from './watchRective.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/watchRective/watchRestive.vue')
</script>

<style scoped></style>