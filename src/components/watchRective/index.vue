<template>
    <watchRective />
    <CodeWrapper :codeContent="watchRectiveCode" />
</template>

<script setup>
import watchRectiveCode from './watchRective.vue?raw';
import { CodeWrapper } from '@/common';
import watchRective from './watchRective.vue';
</script>

<style scoped></style>