<template>
    <div class="header">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="right">
            <div class="tabs" @click="onTabClick">
                <span v-for="item in spans" :key="item.id" :id="item.id" :class='currentClass(item.id)'>
                    {{ item.name }}
                </span>
            </div>
            <div class="links">
                <!-- list map -->
                <a class="github-box" target="_blank" :href="githubUrl">
                    <img :src="githubLogoUrl">
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const logoUrl = "/logo.png";
const githubLogoUrl = '/github.svg';
const githubUrl = 'https://github.com/beiduofeng/learnVue3';
let spans = ref([
    {
        id: '1',
        name: 'JS',
    },
    {
        id: '2',
        name: 'Vue3',
    },
    {
        id: '3',
        name: 'Element+',
    },
])

// 当前选中的 tab 的 id
const currentSelected = ref('1')

/**
 * 将所触发点击事件的span标签的id名赋值给currentSelected
 * @param e 
 */
const onTabClick = (e) => {
    const id = e.target.id
    currentSelected.value = id
}

/**
 * 判断传入的元素 id 和当前选中的 id 是否相同，相同则返回 'selected', 否则返回空字符
 * @param id 
 */
const currentClass = (id) => {
    return currentSelected.value === id ? 'selected' : ''

}
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