<template>
    <button @click="insert">在随机索引处插入</button>
    <button @click="reset">重置</button>
    <button @click="shuffle">洗牌</button>
    <li v-for="item in items" :key="item">
        {{ item }}
        <button @click="remove(item)">x</button>
    </li>
</template>
<script setup>

const insert = () => {

}
const reset = () => {

}
const shuffle = () => {

}
const remove = (item) => {

}

</script>
<style scoped></style>