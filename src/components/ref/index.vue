<template>
    <ref />
    <CodeWrapper :codeContent="refCode" />
</template>

<script setup>
import refCode from './ref.vue?raw';
import { CodeWrapper } from '@/common';
import ref from './ref.vue';
</script>

<style scoped></style>