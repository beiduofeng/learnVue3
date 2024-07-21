<template>
    <ol>
        <li v-for="item in rens" :key="rens.id">{{ item }}</li>
    </ol>
    <button @click="addren">add</button>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['rens', 'addren'])
console.log(props);

</script>

<style scoped></style>