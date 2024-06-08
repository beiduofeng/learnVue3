<template>
    <div class="preson">
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">展示电话号码</button>
    </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
//ref创建基本类型响应式数据, 后面还可以创建对象类型
export default {
    name: 'Vue3',
}
</script>

<script lang="ts" setup>
//setup自动返回渲染
//数据
let name = ref('张三')
let age = ref(18)
let tel = 13888888888


//方法
function changeName() {
    //响应式ref 读取写法.value
    name.value = '李四'
}
function changeAge() {
    age.value = 88
}
function showTel() {
    alert(tel)
}
</script>
<style scoped>
.preson {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 2px;
}
</style>