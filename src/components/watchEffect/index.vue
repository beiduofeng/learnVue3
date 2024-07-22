<template>
    <watchEffect />
    <CodeWrapper :codeContent="watchEffectCode" :name="myname" />
</template>

<script setup>
import watchEffectCode from './watchEffect.vue?raw';
import { CodeWrapper } from '@/common';
import watchEffect from './watchEffect.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/watchEffert/watchEffert.vue')
</script>

<style scoped></style>