<template>
    <todolist />
    <CodeWrapper :codeContent="todolistCode" :name="myname" />
</template>

<script setup>
import todolistCode from './todolist.vue?raw';
import { CodeWrapper } from '@/common';
import todolist from './todolist.vue';
import { ref } from 'vue';
const myname = ref('文件路径： src/components/ToDoList/todolist.vue')
</script>

<style scoped></style>