<template>
    <watchRef />
    <CodeWrapper :codeContent="watchRefCode" />
</template>

<script setup>
import watchRefCode from './watchRef.vue?raw';
import { CodeWrapper } from '@/common';
import watchRef from './watchRef.vue';
</script>

<style scoped></style>