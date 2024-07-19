<template>

    <form>
        查找<input v-model="searchQuery">
    </form>
    <griditem :data="girdData" :columns="girdColumns" :filter-key="searchQuery"></griditem>
</template>
<script setup>
import griditem from './griditem.vue';
import { ref } from 'vue'
const searchQuery = ref('')
const girdColumns = ['name', 'power']
const girdData = [
    { name: 'sun', power: Infinity },
    { name: 'li', power: 999 },
    { name: 'zhang', power: 666 },
    { name: 'xu', power: 888 },
    { name: 'liu', power: 222 },
    { name: 'zhao', power: 555 },
]

</script>
<style scoped></style>