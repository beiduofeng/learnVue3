<template>
    <img src="/images/1.jpeg" alt="">
    <!-- <img src="../../assets/images/2.jpeg"> -->
    <!-- <img :src=`../../assets/images/2.jpeg`> -->
    <!-- v-bind -->
    {{ number }}
    <img :src="imgSrc" />
    <div id="box">
        <el-button type="success" @click="prev">上一张</el-button>
        <el-button type="success" @click="next">下一张</el-button>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue';
const number = ref(1)
let imgSrc = `/images/${number.value}.jpeg`

watch(number, (newValue, oldValue) => {
    imgSrc = `/images/${newValue}.jpeg`

})
const prev = () => {
    number.value--
    if (number.value == 0) {
        number.value = 4
    }
}
const next = () => {
    number.value++

    if (number.value == 5) {
        number.value = 1
    }
}

// { {  } }

// js 模板字符串, es6


</script>

<style scoped>
img {
    height: 400px;
}

#box {
    margin-top: 20px;
    margin-left: 30px;
}
</style>