<template>
    <computerexaple />
    <CodeWrapper :codeContent="computerexapleCode" :name="myname" />
</template>

<script setup>
import computerexapleCode from './computerexaple.vue?raw';
import { CodeWrapper } from '@/common';
import computerexaple from './computerexaple.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/computerexaple/computerexaple.vue')
</script>

<style scoped></style>