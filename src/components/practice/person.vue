<template>
    <children :rens="personList" :addren="addren"></children>
</template>

<script setup>
import children from './children.vue'
import { reactive } from 'vue'

let personList = reactive([
    { id: '001', name: 'sun', age: 18 },
    { id: '002', name: 'li', age: 15 },
    { id: '003', name: 'liu', age: 19 },
])
const addren = () => {
    const len = personList.length;
    personList.push({ id: `${len + 1}`, name: `li ${len}`, age: 18 })
}
</script>

<style scoped></style>