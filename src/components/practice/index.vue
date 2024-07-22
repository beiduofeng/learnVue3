<template>
    <practive />
    <MarkDown :content="childrenContent" />
    <CodeWrapper :codeContent="practiveCode" />
    <CodeWrapper :codeContent="childrenCode" />
</template>

<script setup>
//import childrenContent from './children.md?raw';
import childrenCode from './children.vue?raw';
import practiveCode from './practive.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import practive from './practive.vue';
import children from './children.vue';



</script>

<style scoped></style>