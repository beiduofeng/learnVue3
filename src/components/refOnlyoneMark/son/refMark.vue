<template>
    <div class="preson">
        <h2 ref="t2">{{ name }}</h2>
        <button @click="showlog">输出h2</button>
    </div>
</template>

<script lang='ts'>
import { ref, defineExpose } from 'vue'
export default {
    name: 'refMark',
}
</script>

<script lang="ts" setup>
//数据
let name = "雪中悍刀行"
let t2 = ref()
//方法
function showlog() {
    console.log(t2.value);

}
//暴露出来，让APP可以访问person里定义的name属性
defineExpose({ name })
</script>
<style scoped>
.preson {
    background-color: pink;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 0 6px;
}
</style>