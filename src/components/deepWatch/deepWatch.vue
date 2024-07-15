<template>
  <div class="box">
  <h3>监测 【reactive或ref】 定义的 【对象】类型数据 【中的某个属性值的变化】</h3>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>证书: 1{{person.card.a}}+2{{person.card.b}}</h2>
   <button @click="changeName">修改姓名</button>
   <button @click="changeAge">修改年龄</button>
   <button @click="changePerson">修改人员</button>
   <button @click="changeCa">修改证书1</button>
   <button @click="changeCb">修改证书2</button>
   <button @click="changeC">修改全部证书</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, toRef, computed, watch } from 'vue'
    //数据
  let person =reactive({
    name:'范若若',
    age:17,
    card:{
      a:"驾驶证",
      b:"教师资格证"
    }
  })
    //方法
  function changeName (){
    person.name="林婉儿~"
  }
  function changeAge (){
    person.age=19
  }
  function changePerson(){
    //person  的地址值不变，只是批量的修改了地址值上的数据
    Object.assign(person,{name:"范闲",age:23})
  }
  function changeCa (){
    person.card.a="英语四级证"
  }
  function changeCb (){
    person.card.b="普通话证"
  }
  function changeC (){
    Object.assign(person.card,{a:"aaaaaaaaa",b:"bbbbbbbbbbb"})
  }
    //计算属性
  
    //监视
  //watch(person,()={  })  监视的是person的地址值，监测不到person里面的属性值
  //监测多个数据写成数组形式
  watch([()=>person.card,()=>person.name],()=>{
    console.log(person.card);
    if(person.name=="范闲"){
      console.log(person.name +":"+"张若昀演");   
    }
  },{deep:true})  //rective默认开启深度监视（且无法关闭），控制台可以查看到监测到的c值 若监测对象里面的对象下的深层次数据，需要手动开启深层监测
  //监测对象类型数据中的某一个属性（[基本类型数据]），要把监测的对象写成函数返回值的形式
  // watch(()=>person.name,()=>{
  //   if(person.name=="范闲"){
  //     console.log(person.name +":"+"张若昀演");
      
  //   }
  // })
</script>
<style scoped>
 .box {
    background-color:pink;
    box-shadow:0 0 10px;
    padding:20px;
    margin:15px;
 }
 button {
  margin:0 6px;
 }
</style>