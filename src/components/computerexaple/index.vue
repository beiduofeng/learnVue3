<template>
    <computerexaple />
    <CodeWrapper :codeContent="computerexapleCode" />
</template>

<script setup>
import computerexapleCode from './computerexaple.vue?raw';
import { CodeWrapper } from '@/common';
import computerexaple from './computerexaple.vue';
</script>

<style scoped></style>