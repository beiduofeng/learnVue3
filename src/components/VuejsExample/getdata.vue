<template>
    <p>获取数据</p>
    <h1>最新Vue Core提交</h1>

    <input type="radio" :value="branches[0]" v-model="currentBranch">
    <label :for="branches[0]">{{ branches[0] }}</label>
    <input type="radio" :value="branches[1]" v-model="currentBranch">
    <label :for="branches[1]">{{ branches[1] }}</label>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
        <li></li>
        <li></li>
    </ul>



</template>
<script setup>
import { ref, watchEffect, reactive } from 'vue'
const API_URL = `https://cn.vuejs.org/examples/#fetching-data`
const branches = ['main', 'v2-compat']
const currentBranch = ref(branches[0])
const commits = ref(null)

watchEffect(async () => {
    const url = `${API_URL}${currentBranch.value}`
    commits.value = await (await fetch(url)).json()
})
</script>
<style scoped></style>
