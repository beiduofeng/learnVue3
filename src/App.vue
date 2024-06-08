<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="wrapper">
    <div class="left-menu">
      <RouterLink to="/helloworld">helloworld</RouterLink>
      <RouterLink to="/torefs">torefs</RouterLink>
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
