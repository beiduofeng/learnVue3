<template>
    <div class="preson">
        鸡蛋个数: <input type="number" v-model="num"><br><br>
        价钱: 1.2/个<br><br>
        <h3>{{ sum.toFixed(2) }}</h3>
        <button @click="changeSum">修改总价</button>

    </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, toRef, computed } from 'vue'
export default {
    name: 'Computerexaple',
}
</script>

<script lang="ts" setup>
//数据
let num = ref(0)
//方法
function changeSum() {
    sum.value = 100
}

//get函数表示正向计算关系

//计算属性
let sum = computed({
    get() {
        return num.value * 1.2
    },
    //set函数表示反向计算关系
    set(val) {
        num.value = val / 1.2
    }
})
console.log(sum);

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