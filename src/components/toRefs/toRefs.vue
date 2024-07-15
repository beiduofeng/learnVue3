<template>
    <div class="box">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
    <div>
        展示 ref的基本用法
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, toRef } from 'vue'
//数据
let person = reactive({
    name: '张三',
    age: 18
})
//解构赋值  解构成ref类型的基本数据，下面要用 .value
//把上面rective定义的person对象解构成一个个ref类型的数据
let { name, age } = toRefs(person)
//toRef
//let {age} = toRef(person)
//方法
function changeName() {
    name.value += '~'
}
function changeAge() {
    age.value += 1
}

</script>
<style scoped>
.box {
    background-color: pink;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 2px;
}
</style>