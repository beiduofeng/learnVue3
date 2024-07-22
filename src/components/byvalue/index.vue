<template>
    <father />
    <CodeWrapper :codeContent="fatherCode" :name="myname1" />
    <CodeWrapper :codeContent="sunCode" :name="myname2" />
</template>

<script setup>
import fatherCode from './father.vue?raw';
import sunCode from './sun.vue?raw';
import { CodeWrapper } from '@/common';
import father from './father.vue';
import { ref } from 'vue';
const myname1 = ref('文件路径： src/components/byvalue/father.vue')
const myname2 = ref('文件路径： src/components/byvalue/sun.vue')
</script>

<style scoped></style>