<template>
    <!-- //向person传personList,并给它起了一个名称叫rens,person 通过这个名称来识别传的数据
//不加：是字符串，加：是表达式 -->
    <!-- <Preson/ a="999+1" :b="1+1" :rens="personList"> -->
    <Children :rens="personList" />
</template>
<script lang="ts">
import Children from './Children.vue'
import { type persons } from './types'
import { reactive } from 'vue'
</script>
<script lang="ts" setup>
let personList: persons = reactive([
    { id: '001', name: 'zhangsan', age: 18 },
    { id: '002', name: 'lisi', age: 17 },
    { id: '003', name: 'wangwu', age: 19 }
])
</script>

<style scoped></style>