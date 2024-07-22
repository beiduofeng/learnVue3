<template>
    <Parent />
    <MarkDown :content="p2cContent" />
    <CodeWrapper :codeContent="ParentCode" :name="myname1" />
    <CodeWrapper :codeContent="ChildrenCode" :name="myname2" />
</template>

<script setup>
import p2cContent from './p2c.md?raw';
import ParentCode from './Parent.vue?raw';
import ChildrenCode from './Children.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import Parent from './Parent.vue';
import { ref } from 'vue';
const myname1 = ref('文件路径： src/components/parent2children/Parent.vue')
const myname2 = ref('文件路径： src/components/parent2children/Children.vue')
</script>

<style scoped></style>
