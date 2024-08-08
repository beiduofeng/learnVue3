<template>
    <p>测试</p>
    <p :class="activeClass" @click="changeColor(activeClass, $event)" v-for="(item, index) in persons" :key="index">
        {{
            item }}</p>
</template>

<script setup>
import { reactive, ref } from 'vue';
let persons = reactive(['aaa', 'sss', 'ddd'])
let activeClass = ref('commom')
const changeColor = (activeClass, e) => {
    console.log(e);
    activeClass = 'red'
    console.log(activeClass);

}
</script>

<style scoped>
.common {
    color: antiquewhite;
}

.red {
    color: red;
}
</style>