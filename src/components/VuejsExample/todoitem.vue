<template>
    <li>{{ todo.text }}</li>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    todo: Object
})
</script>
<style scoped></style>