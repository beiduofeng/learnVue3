<template>
    <div class="box">
        {{ msg }}
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
//setup自动返回渲染
//数据
let msg = ref('hello world')
</script>
<style scoped>
.box {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}
</style>