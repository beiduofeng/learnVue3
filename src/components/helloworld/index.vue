<template>
  <HelloWorld />
  <MarkDown :content="HelloWorldContent"/>
  <CodeWrapper :codeContent="HelloWorldCode"/>
</template>

<script setup>
import HelloWorldContent from './helloworld.md?raw';
import HelloWorldCode from './helloworld.vue?raw';
import { MarkDown, CodeWrapper } from '@/common';
import HelloWorld from './helloworld.vue';
</script>

<style scoped>
</style>
