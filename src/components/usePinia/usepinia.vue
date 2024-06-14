<template>
    <div class="preson">
       <ul>
         <li v-for="a in a.useList" :key="a.id">{{a.msg}}</li>
       </ul>
    </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, toRef, computed } from 'vue'
//引入
import {usePiniaStore} from '@/store/usepiniaexe'
export default {
    name: 'usePinia',
}
</script>

<script lang="ts" setup>
//使用
const a=usePiniaStore()

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