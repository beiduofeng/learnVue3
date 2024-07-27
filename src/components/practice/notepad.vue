<template>
    书名：<input type="text" v-model="data.content">
    <button @click="add">添加</button>
    <hr>

    <ul>
        <li v-for="(value, index) in data.list">
            {{ value }} <button @click="del(index)">删除</button>
        </li>
    </ul>

    现拥有藏书量： {{ data.list.length }}本 <br>

    <button @click="clear">清空</button>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
    content: "",
    list: ["科林索尔的最后夏天", "javascript高级程序设计", '活着', '一日三秋'],
})
//添加
const add = () => {
    if (data.content == '') {
        alert('请输入内容！')
    }
    data.list.push(data.content)
    data.content = ''
}
//删除
const del = (index) => {
    data.list.splice(index)
}
//清空
const clear = () => {
    data.list = []
}
</script>

<style scoped></style>