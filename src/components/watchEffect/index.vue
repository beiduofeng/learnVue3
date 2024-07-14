<template>
    <watchEffect />
    <CodeWrapper :codeContent="watchEffectCode" />
</template>

<script setup>
import watchEffectCode from './watchEffect.vue?raw';
import { CodeWrapper } from '@/common';
import watchEffect from './watchEffect.vue';
</script>

<style scoped></style>