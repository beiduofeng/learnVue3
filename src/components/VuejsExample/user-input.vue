<template>
    <p>用户输入处理</p>
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">reverseMessage</button>
    <button @click="message += '!'">Append"!"</button>
    <a href="http://127.0.0.1:5173/#/VE" @click.prevent="notify">A link with VueExample</a>
</template>
<script setup>
import { ref } from 'vue'

const message = ref('hello,world!')
//通过.value修改一个ref的值
function reverseMessage() {
    message.value = message.value.split('').reverse().join('')
}
const notify = () => {
    alert("navigation was prevented.")
}

</script>

<style scoped>
button,
a {
    display: block;
    margin-bottom: 1em;
}
</style>