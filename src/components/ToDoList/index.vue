<template>
    <todolist />
    <CodeWrapper :codeContent="todolistCode" />
</template>

<script setup>
import todolistCode from './todolist.vue?raw';
import { CodeWrapper } from '@/common';
import todolist from './todolist.vue';
</script>

<style scoped></style>