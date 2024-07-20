<template>
    <div class="box">
        {{ msg }}
    </div>
</template>
<script lang="ts" setup>
//setup自动返回渲染
//数据
const msg = 'hello world'
</script>
<style scoped>
.box {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}
</style>