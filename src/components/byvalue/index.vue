<template>
    <father />
    <CodeWrapper :codeContent="fatherCode" />
</template>

<script setup>
import fatherCode from './father.vue?raw';
import { CodeWrapper } from '@/common';
import father from './father.vue';
</script>

<style scoped></style>