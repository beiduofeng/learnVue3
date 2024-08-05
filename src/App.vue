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
.wrapper {
  width: 100vw;
  display: flex;
  margin-top: 2px;
}

.content-wrapper {
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
