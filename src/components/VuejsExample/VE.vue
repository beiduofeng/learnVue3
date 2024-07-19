<template>
    <div id="concent">
        <div id="left">
            <RouterLink to="/1">你好，世界！</RouterLink>
            <RouterLink to="/2">用户输入处理</RouterLink>
            <RouterLink to="/3">Attribute绑定</RouterLink>
            <RouterLink to="/4">条件与循环</RouterLink>
            <RouterLink to="/5">表单绑定</RouterLink>
            <RouterLink to="/6">简单组件</RouterLink>
            <RouterLink to="/7">markdown编辑器</RouterLink>
            <RouterLink to="/8">获取数据</RouterLink>
            <RouterLink to="/9">有排序和过滤器的网格</RouterLink>
            <RouterLink to="/10">树状视图</RouterLink>


        </div>
        <div id="right">
            <RouterView />
        </div>
    </div>

    <!-- <CodeWrapper :codeContent="helloworldCode" /> -->



</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { CodeWrapper } from '@/common';
import helloworldCode from './helloworld.vue?raw';
import helloworld from './helloworld.vue';
import userInput from './user-input.vue';
import attributeBinding from './attribute-binding.vue';
import conditionCycles from './conditions-cycles.vue';
import markdownEditor from './markdown-editor.vue';
import getdata from './getdata.vue'
import grid from './grid.vue'
import tree from './tree.vue'
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
    background-color: rgba(121, 175, 180, 0.933);
    border: 1px solid rgb(123, 228, 230);
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