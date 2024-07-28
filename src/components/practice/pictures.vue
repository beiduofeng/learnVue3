<template>
    <!-- <img src="../../assets/images/2.jpeg"> -->
    <!-- <img :src=`../../assets/images/2.jpeg`> -->
    <img :src="`../../assets/images/${number}.jpeg`" />
    <div id="box">
        <el-button type="success" @click="prev">上一张</el-button>
        <el-button type="success" @click="next">下一张</el-button>
    </div>

</template>

<script setup>
import { ref } from 'vue';
let number = ref(1)
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