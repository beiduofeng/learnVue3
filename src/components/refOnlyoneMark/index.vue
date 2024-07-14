<template>
    <fa />
    <CodeWrapper :codeContent="faCode" />
</template>

<script setup>
import faCode from './fa.vue?raw';
import { CodeWrapper } from '@/common';
import fa from './fa.vue';
</script>

<style scoped></style>