<template>
    <watchRefPrimitiveType />
    <CodeWrapper :codeContent="watchRefPrimitiveTypeCode" :name="myname" />
</template>

<script setup>
import watchRefPrimitiveTypeCode from './watchRefPrimitiveType.vue?raw';
import { CodeWrapper } from '@/common';
import watchRefPrimitiveType from './watchRefPrimitiveType.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/watchRefPrimitiveType/watchRefPrimitiveType.vue')
</script>

<style scoped></style>