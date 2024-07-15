<template>
    <div class="box">
        <h3>监测 【ref】 定义的 【对象】类型数据</h3>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人员</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, toRef, computed, watch } from 'vue'
//数据
let person = ref({
    name: '范若若',
    age: 17
})
//方法
function changeName() {
    person.value.name = "林婉儿~"
}
function changeAge() {
    person.value.age = 19
}
function changePerson() {
    person.value = { name: "范闲", age: 23 }
}
//计算属性

//监视
//watch(person,()={  })  监视的是person的地址值，监测不到person里面的属性值
watch(person, (n, old) => {
    console.log(person, n, old);
}, { deep: true })
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