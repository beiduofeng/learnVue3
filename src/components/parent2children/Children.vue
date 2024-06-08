<template>
  <div class="preson">
   <h3>数据父（）传子（），子展示</h3>
   <ul>
     <li v-for="p in rens" :key="p.id">{{p.name }}--{{p.age}}</li>
   </ul>
  </div>
</template>

<script lang='ts'>
import {ref,reactive,computed} from 'vue'
import { type personInter, type persons} from './types'
  export default {
    name:'Children',
  }
</script>

<script lang="ts" setup>
import {defineProps} from 'vue'
//接受数据
defineProps<{ "rens": persons }>()
    //数据
   
    //方法
  
  
  
  //get函数表示正向计算关系

    //计算属性
    
    
</script>
<style scoped>
 .preson {
    background-color:pink;
    box-shadow:0 0 10px;
    padding:20px;
    margin:15px;
 }
 button {
  margin:2px;
 }
</style>