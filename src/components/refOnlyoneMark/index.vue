<template>
    <fa />
    <CodeWrapper :codeContent="faCode" :name="myname1" />
    <CodeWrapper :codeContent="refMarkCode" :name="myname2" />
</template>

<script setup>
import faCode from './fa.vue?raw';
import refMarkCode from './son/refMark.vue';
import { CodeWrapper } from '@/common';
import fa from './fa.vue';
import { ref } from 'vue';
const myname1 = ref('文件路径： src/components/refOnlyoneMark/fa.vue')
const myname2 = ref('文件路径： src/components/refOnlyoneMark/son/refMark.vue')
</script>

<style scoped></style>