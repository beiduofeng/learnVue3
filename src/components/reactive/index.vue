<template>
    <reactive />
    <CodeWrapper :codeContent="reactiveCode" />
</template>

<script setup>
import reactiveCode from './reactive.vue?raw';
import { CodeWrapper } from '@/common';
import reactive from './reactive.vue';
</script>

<style scoped></style>