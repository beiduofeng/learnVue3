<template>
    <p>Attribute绑定</p>
    <p>
        <span :title="message">绑定普通字符串</span>
    </p>
    <p :class="{ red: isRead }" @click="toggleRed">class绑定支持对象和数组</p>
    <p :style="{ color }" @click="toggleColor">样式绑定也支持对象和数组</p>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('hello,world !')
const isRead = ref(true)
const color = ref('green')
const toggleRed = () => {
    isRead.value = !isRead.value
}
const toggleColor = () => {
    color.value = color.value === 'green' ? 'blue' : 'green'
}
</script>
<style scoped>
.red {
    color: red;
}
</style>