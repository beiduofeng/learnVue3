<template>
    <hooks />
    <CodeWrapper :codeContent="hooksCode" />
</template>

<script setup>
import hooksCode from './hooks.vue?raw';
import { CodeWrapper } from '@/common';
import hooks from './hooks.vue';
</script>

<style scoped></style>