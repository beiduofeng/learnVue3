<template>
    <p>你好，世界！</p>
    <h1>{{ message }}</h1>
</template>
<script setup>
import { ref } from 'vue'
const message = ref("hello,world !")
</script>
<style scoped></style>