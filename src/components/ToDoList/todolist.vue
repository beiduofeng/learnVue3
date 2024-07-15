<template>
   <div :class="{ a: b }">
      <h5>动态样式绑定</h5>
      <input type="text" v-model="inputvalue" />
      <button @click="butclick">提交</button>
      <ul>
         <li v-for="m in msg">{{ m }}</li>

      </ul>
      <div class="c" v-if="show">123456789</div>
      <div class="c" v-else>9876543211111111111111111111111111</div>
      <button @click="showclick">change</button>
   </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
let show = ref('aa')
let b = false
let inputvalue = ref('123456')
let msg = reactive(['第一课的内容', '第二课的内容'])

function butclick() {
   msg.push(inputvalue)
   inputvalue = ''
   b = true
}
function showclick() {
   show.value = ''
}
</script>
<style scoped>
.a {
   background-color: skyblue;
   box-shadow: 0 0 10px;
   padding: 20px;
   margin: 15px;
}

input {
   margin-right: 3px;
}

.c {
   background-color: pink;
   box-shadow: 0 0 10px;
   padding: 20px;
   margin: 15px;
}
</style>