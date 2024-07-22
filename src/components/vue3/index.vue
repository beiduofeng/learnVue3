<template>
    <vue3 />
    <CodeWrapper :codeContent="vue3Code" :name="myname" />
</template>

<script setup>
import vue3Code from './vue3.vue?raw';
import { CodeWrapper } from '@/common';
import vue3 from './vue3.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/vue3/vue3.vue')
</script>

<style scoped></style>