<template>
    <usepinia />
    <CodeWrapper :codeContent="usepiniaCode" :name="myname" />
</template>

<script setup>
import usepiniaCode from './usepinia.vue?raw';
import { CodeWrapper } from '@/common';
import usepinia from './usepinia.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/usePinia/usepinia.vue')
</script>

<style scoped></style>