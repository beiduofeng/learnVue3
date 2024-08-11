<script setup>
import { RouterView } from 'vue-router'
import { Header, Menu } from './common';
</script>
<template>
  <Header />
  <div class="wrapper">
    <Menu />
    <div class="content-wrapper">
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.activecolor {
  color: #d50b0b;
}

.wrapper {
  width: 100vw;
  display: flex;
  margin-top: 2px;
}

<<<<<<< HEAD .left-menu {
  width: 200px;
  min-height: 600px;
  overflow-y: auto;
  background-color: #fefe;
  border: 1px solid tomato;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
}

a {
  margin-bottom: 8px
}

a:hover {
  color: #de7b12;
}

a:active {
  color: #d50b0b;
}

=======>>>>>>>feat/sunjs_route_menu .content-wrapper {
  padding: 12px 64px;
  flex-grow: 1;
}

.content {
  border: 1px solid #eee;
  background-color: #e8f6eeee;
  width: 100%;
  min-height: 600px;
  padding: 12px;
}
</style>
