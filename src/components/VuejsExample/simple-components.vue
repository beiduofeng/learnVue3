<template>
    <p>简单组件</p>
    <ol>
        <todiitem v-for="item in groceryList" :key="item.id" :todo="item"></todiitem>
    </ol>
</template>
<script setup>
import { ref } from 'vue';
import todiitem from './todoitem.vue'
const groceryList = ref([
    { id: 0, text: '000' },
    { id: 1, text: '111' },
    { id: 2, text: '222' },
])
</script>
<style scoped></style>