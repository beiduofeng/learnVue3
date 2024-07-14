<template>
  <ToRefs />
  <!-- <MarkDown :content="HelloWorldContent"/> -->
  <CodeWrapper :codeContent="toRefCode"/>
</template>

<script setup>
// import toRefContent from './.md?raw';
import toRefCode from './toRefs.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import ToRefs from './toRefs.vue';
</script>

<style scoped>
</style>
