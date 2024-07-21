<template>
    <practive />
    <CodeWrapper :codeContent="practiveCode" />
</template>

<script setup>
import practiveCode from './practive.vue?raw';
import { CodeWrapper } from '@/common';
import practive from './practive.vue';
</script>

<style scoped></style>