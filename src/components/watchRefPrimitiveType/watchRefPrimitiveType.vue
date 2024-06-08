<template>
    <div class="preson">
        <h3>监测 ref 定义的 基本类型数据</h3>
        <h2>{{ sum }}</h2>
        <button @click="sumadd">点我加1</button>

    </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, toRef, computed, watch } from 'vue'
export default {
    name: 'watchRefPrimitiveType',
}
</script>

<script lang="ts" setup>
//数据
let sum = ref(0)
//方法
function sumadd() {
    sum.value += 1
}
//计算属性

//监视
watch(sum, (newVa) => {
    console.log(newVa);

    if (newVa >= 5) {
        alert("不能再加了")
        //停止监视
        stopWatch()
    }
})
</script>
<style scoped>
.preson {
    background-color: pink;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 2px;
}
</style>