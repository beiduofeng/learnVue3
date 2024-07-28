<template>
    <div class="header">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="right">
            <div class="tabs">
                <span :class="currentJSclass" id="js" @click="() => onTabClick('js')">JS</span>
                <span :class="currentVue3class" id="Vue3" @click="() => onTabClick('Vue3')">Vue3</span>
                <span :class="currentElementclass" id="Element" @click="() => onTabClick('Element')">Element +</span>
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
const currentJSclass = ref(currentSelected.value === 'js' ? 'selected' : '')
const currentVue3class = ref(currentSelected.value === 'Vue3' ? 'selected' : '')
const currentElementclass = ref(currentSelected.value === 'Element' ? 'selected' : '')

const onTabClick = (id) => {
    console.log('id', id)
    currentSelected.value = id
    currentJSclass.value = currentSelected.value === 'js' ? 'selected' : ''
    currentVue3class.value = currentSelected.value === 'Vue3' ? 'selected' : ''
    currentElementclass.value = currentSelected.value === 'Element' ? 'selected' : ''
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

.selected {
    border-bottom: 1px solid #db2424;
}

.github-box img {
    width: 28px;
}

.links a {
    cursor: pointer;
}
</style>