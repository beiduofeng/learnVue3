<template>
  <el-row class="menu-row">
    <el-col :span="24">
      <el-menu default-active="1">
        <el-sub-menu index="1">
          <template #title>
            <span>基础</span>
          </template>
            <el-menu-item index="1-1">
              <RouterLink to="/helloworld">helloworld</RouterLink>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <span>场景</span>
          </template>
            <el-menu-item index="2-1">
              <RouterLink to="/todolist">todoList</RouterLink>
            </el-menu-item>
        </el-sub-menu>
        
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { VueRouteConfigs } from '@/router/routeConfig';
</script>


<style scoped>
.menu-row {
  min-width: 180px;
}
</style>
