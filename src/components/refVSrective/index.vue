<template>
    <refVsRective />
    <CodeWrapper :codeContent="refVsRectiveCode" :name="myname" />
</template>

<script setup>
import refVsRectiveCode from './refVsRective.vue?raw';
import { CodeWrapper } from '@/common';
import refVsRective from './refVsRective.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/refVSrective/refVSRective.vue')
</script>

<style scoped></style>