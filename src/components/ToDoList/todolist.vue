<template>
  <div class="a">
     <input type="text" v-model="inputvalue"/>
     <button @click="butclick">提交</button>
     <ul>
        <li v-for="m in msg">{{m}}</li>
    
     </ul>
  </div>
</template>
<script lang='ts'>
import {reactive,ref} from 'vue'
   export default{
    name:"todolist"
   }
</script>
<script lang='ts' setup>
   let inputvalue=ref('123456')
   let msg=reactive(['第一课的内容','第二课的内容'])
</script>
<style scoped>
.a{
  background-color: skyblue;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}
input {
    margin-right:3px;
}
</style>