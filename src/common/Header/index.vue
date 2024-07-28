<template>
    <div class="header">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="right">
            <div class="tabs" @click="onTabClick">
                <span :class="currentclass('js')" id="js">JS</span>
                <span :class="currentclass('Vue3')" id="Vue3">Vue3</span>
                <span :class="currentclass('Element')" id="Element">Element +</span>
            </div>
            <div class="links">
                <!-- list map -->
                <a class="github-box" target="_blank" :href="githubUrl">
                    <img :src="githuLogoUrl">
                </a>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const currentSelected = ref()
const onTabClick = (e) => {
    const id = e.target.id
    currentSelected.value = id
}

const currentclass = (id) => {
    return currentSelected.value === id ? 'selected' : ''
}
// BOM 知识点
const logoUrl = "/logo.png";
const githuLogoUrl = '/github.svg';
const githubUrl = 'https://github.com/beiduofeng/learnVue3';
</script>

<style scoped>
.header {
    height: 50px;
    padding: 2px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 8px 0 rgb(220, 215, 215);
}

.logo {
    width: 100px;
}

.logo img {
    height: 48px;
}

.right {
    min-width: 600px;
    display: flex;
    justify-content: flex-end;
}

.tabs span {
    margin-right: 20px;
    display: inline-block;
    line-height: 28px;
    cursor: pointer;
}

.tabs span:hover {
    color: #358be1;
}

.selected {
    border-bottom: 2px solid #2419ec;
}

.github-box img {
    width: 28px;
}

.links a {
    cursor: pointer;
}
</style>