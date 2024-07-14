<template>
    <refVsRective />
    <CodeWrapper :codeContent="refVsRectiveCode" />
</template>

<script setup>
import refVsRectiveCode from './refVsRective.vue?raw';
import { CodeWrapper } from '@/common';
import refVsRective from './refVsRective.vue';
</script>

<style scoped></style>