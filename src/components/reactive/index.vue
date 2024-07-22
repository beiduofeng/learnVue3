<template>
    <reactive />
    <CodeWrapper :codeContent="reactiveCode" :name="myname" />
</template>

<script setup>
import reactiveCode from './reactive.vue?raw';
import { CodeWrapper } from '@/common';
import reactive from './reactive.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/reactive/reactive.vue')
</script>

<style scoped></style>