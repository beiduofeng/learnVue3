<template>
    <p>条件与循环</p>
    <button @click="show = !show">切换列表</button>
    <button @click="list.push(list.length + 1)">增加一条数据</button>
    <button @click="list.pop()">删除一条数据</button>
    <button @click="list.reverse()">翻转列表</button>

    <ul v-if="show && list.length">
        <li v-for="item of list" :key="item">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">列表不能为空，但是可以隐藏</p>
    <p v-else>空列表</p>

</template>
<script setup>
import { ref } from 'vue'
const show = ref(true)
const list = ref([1, 2, 3])
</script>
<style scoped></style>