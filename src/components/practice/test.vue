<template>
    <p>测试</p>
    <p :class="ac" @click="changeColor(activeClass, $event)" v-for="(item, index) in persons" :key="index">
        {{
            item }}</p>
</template>

<script setup>
import { reactive, ref } from 'vue';
let persons = reactive(['aaa', 'sss', 'ddd'])
let activeClass = ref('co')
let ac = activeClass.value
const changeColor = (ac, e) => {
    console.log(e);
    ac = 'red'
    console.log(ac);

}
</script>

<style scoped>
.co {
    color: rgb(230, 146, 37);
}

.red {
    color: red;
}
</style>