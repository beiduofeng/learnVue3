<template>
    <img src="../../assets/images/2.jpeg">
    <!-- <img :src=`../../assets/images/2.jpeg`> -->
    <img :src="`../../assets/images/${num}.jpeg`" />
    <div id="but">
        <button @click="prev">上一张</button>
        <button @click="next">下一张</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';
let num = ref(1)
const prev = () => {

}
const next = () => {

}
</script>

<style scoped>
img {
    height: 400px;
}

#but {
    margin-top: 20px;
    margin-left: 30px;
}
</style>