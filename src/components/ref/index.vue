<template>
    <ref />
    <CodeWrapper :codeContent="refCode" :name="myname" />
</template>

<script setup>
import refCode from './ref.vue?raw';
import { CodeWrapper } from '@/common';
import ref from './ref.vue';
import { reactive } from 'vue';
const myname = reactive('文件路径： src/components/ref/ref.vue')
</script>

<style scoped></style>