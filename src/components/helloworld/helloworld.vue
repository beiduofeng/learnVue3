<template>
    <div class="preson">
        {{msg}}
    </div>
</template>
<script lang='ts'>
import { ref } from 'vue'
//ref创建基本类型响应式数据, 后面还可以创建对象类型
export default {
    name: 'helloworld'
}
</script>

<script lang="ts" setup>
//setup自动返回渲染
//数据
let msg = ref('hello world')


</script>
<style scoped>
.preson {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}
</style>