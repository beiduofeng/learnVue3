<template>
    <hooks />
    <CodeWrapper :codeContent="hooksCode" :name="myname" />
</template>

<script setup>
import hooksCode from './hooks.vue?raw';
import { CodeWrapper } from '@/common';
import hooks from './hooks.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/hooks/hooks.vue')
</script>

<style scoped></style>