<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="wrapper">
    <div class="left-menu">
      <RouterLink to="/Vue3">vue3语法规则</RouterLink>
      <RouterLink to="/helloworld">helloworld</RouterLink>
      <RouterLink to="/torefs">torefs</RouterLink>
      <RouterLink to="/p2c">父传子</RouterLink>
      <RouterLink to="/computed">computed计算属性</RouterLink>
      <RouterLink to="/Computerexaple">computed例子</RouterLink>
      <RouterLink to="/WatchRective">监测rective对象型数据</RouterLink>
      <RouterLink to="/watchRef">监测ref对象型数据</RouterLink>
      <RouterLink to="/refVsRective">ref与rective区别</RouterLink>
      <RouterLink to="/deepWatch">深层监测对象中的某个属性</RouterLink>
      <RouterLink to="/Reactive">reactive创建响应式对象</RouterLink>
      <RouterLink to="/watchEffect">watchEffect</RouterLink>
      <RouterLink to="/Ref">ref创建响应式对象</RouterLink>
      <RouterLink to="/Fa">ref唯一标识</RouterLink>
      <RouterLink to="/watchRefPrimitiveType">watch监视ref基本类型数据</RouterLink>
      <RouterLink to="/Hooks">自定义Hooks</RouterLink>
      <RouterLink to="/usePinia">usePinia</RouterLink>
      <RouterLink to="/todolist">ToDoList</RouterLink>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  display: flex;
}

.left-menu {
  width: 200px;
  min-height: 600px;
  overflow-y: auto;
  background-color: #fefe;
  border: 1px solid tomato;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 8px
  }
}

.content-wrapper {
  padding: 12px;
  flex-grow: 1;
}

.content {
  /* border: 1px solid tomato; */
  background-color: #e8f6eeee;
  width: 100%;
  min-height: 600px;
}
</style>
