<template>
    <p>v-bind一次绑定多个属性,可以将要绑定的所有属性写成一个对象</p>
    <button v-bind="bind">button</button>
    <ul>
        <p>v-for遍历数组（item，index）</p>
        <li v-for="(item, index) in data" :key="item.id" :class="{ isred: item.isred }"
            @click="change(item.id, item.isred, $event)">{{
                index }}-{{
                item.name }}
        </li>
        <p>v-for遍历对象（value,key,index）</p>
        <li v-for="(value, key, index) in stu" :key="index">{{ index }}-{{ key }}-{{ value }}</li>
    </ul>
</template>

<script setup>
import { reactive } from 'vue';
let bind = {
    id: 'styleid',
    class: 'styleclass',
    title: 'ti'
}
let data = reactive([
    { id: 1, name: 'one', isred: false },
    { id: 2, name: 'two', isred: false },
    { id: 3, name: 'three', isred: false },
])
const change = (msg1, msg2, e) => {
    console.log(msg1, msg2);
    console.log(e);
    msg2 = true
    console.log(msg2);
    // for (let i = 1; i <= 3; i++) {
    //     if (i == msg1) {
    //         msg2 = true
    //         console.log(msg2);
    //     }
    // }
}
let stu = {
    name: 'zhangsan',
    age: 19,
    stuid: 220
}
</script>

<style scoped>
.isred {
    color: red;
}
</style>