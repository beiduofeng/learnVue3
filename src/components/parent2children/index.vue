<template>
    <Parent />
    <MarkDown :content="p2cContent" />
    <CodeWrapper :codeContent="ParentCode" />
    <CodeWrapper :codeContent="ChildrenCode" />
</template>

<script setup>
import p2cContent from './p2c.md?raw';
import ParentCode from './Parent.vue?raw';
import ChildrenCode from './Children.vue?raw';
import { CodeWrapper } from '@/common';
import Parent from './Parent.vue';
</script>

<style scoped></style>
