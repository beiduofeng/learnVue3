<template>
    <aa />
    <CodeWrapper :codeContent="aaCode" />
</template>

<script setup>
import aaCode from './aa.vue?raw';
import { CodeWrapper } from '@/common';
import aa from './aa.vue';
</script>

<style scoped></style>