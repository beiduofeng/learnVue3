<template>
    <usepinia />
    <CodeWrapper :codeContent="usepiniaCode" />
</template>

<script setup>
import usepiniaCode from './usepinia.vue?raw';
import { CodeWrapper } from '@/common';
import usepinia from './usepinia.vue';
</script>

<style scoped></style>