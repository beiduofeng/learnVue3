<template>
    <watchRef />
    <CodeWrapper :codeContent="watchRefCode" :name="myname" />
</template>

<script setup>
import watchRefCode from './watchRef.vue?raw';
import { CodeWrapper } from '@/common';
import watchRef from './watchRef.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/watchRef/watchRef.vue')
</script>

<style scoped></style>