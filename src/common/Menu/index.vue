<template>
  <el-row class="menu-row">
    <el-col :span="24">
      <el-menu default-active="1">
        <el-sub-menu :index="`${index + 1}`" v-for="(item, index) in VueRouteConfigs" :key="item.name">
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item :index="getElMenuItemIndex(index, innerIndex)" v-for="(innerItem, innerIndex) in item.children"
            :key="innerItem.name">
            <RouterLink :to="innerItem.path">{{ innerItem.name }}</RouterLink>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { VueRouteConfigs } from '@/router/routeConfig';

/**
 * 拼接 el-menu-item 的 index
 * @param outer 
 * @param inner 
 */
const getElMenuItemIndex = (outer: number, inner: number) => {
  return `${outer + 1}-${inner + 1}`
}
</script>


<style scoped>
.menu-row {
  min-width: 180px;
}
</style>
