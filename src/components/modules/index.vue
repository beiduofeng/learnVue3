<template>
    <aa />
    <CodeWrapper :codeContent="aaCode" />
    <CodeWrapper :codeContent="aaaCode" />
    <CodeWrapper :codeContent="bbbCode" />
    <CodeWrapper :codeContent="cccCode" />
    <CodeWrapper :codeContent="hotCode" />
    <CodeWrapper :codeContent="tuangouCode" />
</template>

<script setup>
import aaCode from './aa.vue?raw';
import aaaCode from './aaa.vue?raw';
import bbbCode from './bbb.vue?raw';
import cccCode from './ccc.vue?raw';
import hotCode from './hot.vue?raw';
import tuangouCode from './tuangou.vue?raw';
import { CodeWrapper } from '@/common';
import aa from './aa.vue';
</script>

<style scoped></style>