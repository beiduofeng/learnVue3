<template>
  <div class="box">
    <h3>数据父（）传子（），子展示</h3>
    <ul>
      <li v-for="p in rens" :key="p.id">{{ p.name }}--{{ p.age }}</li>
    </ul>
    <button @click="addren">添加人</button>
    <p>{{ num }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { type personInter, type persons } from './types'
import { defineProps } from 'vue'
//接受数据
const props = defineProps(['rens', 'addren'])
const num = computed(() => {
  let ages = props.rens.filter((item) => {
    return item.age >= 18
  })
  return ages.length
})
console.log(num);

props.addren();

//get函数表示正向计算关系

</script>
<style scoped>
.box {
  background-color: pink;
  box-shadow: 0 0 10px;
  padding: 20px;
  margin: 15px;
}

button {
  margin: 2px;
}
</style>