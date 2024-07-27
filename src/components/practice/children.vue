<template>
    <ol>
        <li v-for="item in rens" :key="item.id">{{ item.name }}的年龄{{ item.age }}岁</li>
    </ol>
    <button @click="addren">add</button>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['rens', 'addren'])
console.log(props);

</script>

<style scoped></style>