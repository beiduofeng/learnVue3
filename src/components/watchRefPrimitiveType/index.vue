<template>
    <watchRefPrimitiveType />
    <CodeWrapper :codeContent="watchRefPrimitiveTypeCode" />
</template>

<script setup>
import watchRefPrimitiveTypeCode from './watchRefPrimitiveType.vue?raw';
import { CodeWrapper } from '@/common';
import watchRefPrimitiveType from './watchRefPrimitiveType.vue';
</script>

<style scoped></style>