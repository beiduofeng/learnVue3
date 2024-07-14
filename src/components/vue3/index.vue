<template>
    <vue3 />
    <CodeWrapper :codeContent="vue3Code" />
</template>

<script setup>
import vue3Code from './vue3.vue?raw';
import { CodeWrapper } from '@/common';
import vue3 from './vue3.vue';
</script>

<style scoped></style>