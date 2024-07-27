<template>
    <div id="concent">
        <div id="left">
            <RouterLink to="/11">列表添加数据</RouterLink>
            <RouterLink to="/12">轮播图</RouterLink>
            <RouterLink to="/13">记事本</RouterLink>


        </div>
        <div id="right">
            <RouterView />
        </div>
    </div>

    <!-- <CodeWrapper :codeContent="aCode" /> -->



</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { CodeWrapper } from '@/common';
import aCode from './a.vue?raw';
import a from './a.vue'
import pictures from './pictures.vue'
import notepad from './notepad.vue'

</script>

<style scoped>
#concent {
    display: flex;
    border-bottom: 2px solid rgb(31, 28, 28);
    border-top: 2px solid rgb(21, 19, 19);
}

#left {
    width: 160px;
    min-height: 600px;
    overflow-y: auto;
    background-color: rgba(208, 103, 214, 0.933);
    border: 1px solid rgb(86, 182, 26);
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
}

#right {
    float: right;
    width: 1009px;
    margin-left: 10px;
    min-height: 600px;
    background-color: rgb(216, 231, 226);
    border: 1px solid rgb(199, 225, 226);
}

a {
    margin-bottom: 8px;
}
</style>