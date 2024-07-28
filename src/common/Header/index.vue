<template>
    <div class="header">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="right">
            <div class="tabs">
                <span>JS</span>
                <span>Vue3</span>
                <span>Element +</span>
            </div>
            <div class="links">
                <!-- list map -->
                <a class="github-box" target="_blank" href="https://github.com/beiduofeng/learnVue3">
                    <img src="../../assets/github.svg">
                </a>
            </div>

        </div>
    </div>
</template>
<script setup>
// BOM 知识点
const host = "http://" + window.location.host
const logoUrl = host + "/src/assets/logo.png";
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
}

.github-box img {
    width: 28px;
}

.links a {
    cursor: pointer;
}
</style>