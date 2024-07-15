<template>
    <div class="box">
        <h3> watshEffect监测 【reactive或ref】 定义的 【对象】类型数据 【中的某个属性值的变化】</h3>
        <h2>水温：{{ hot }}</h2>
        <h2>水位：{{ height }}</h2>
        <button @click="changehot">温度上升</button>
        <button @click="changeheiht">水位上升</button>
        <h2>{{ warn }}</h2>

    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, toRef, computed, watch, watchEffect } from 'vue'
//数据
let hot = ref(0)
let height = ref(0)
let warn = ref('')
//方法
function changehot() {
    hot.value += 10
}
function changeheiht() {
    height.value += 10
}
//计算属性

//监视
//不用写监测对象，watchEffect根据判断条件自动去数据里匹配
watchEffect(() => {
    if (hot.value >= 60 || height.value >= 50) {
        warn.value = "危险预警，快速撤离";
    }
})
</script>
<style scoped>
.box {
    background-color: pink;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 0 6px;
}
</style>