<template>
    <div class="header">
        <div class="logo"> learnVue3 </div>
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

</script>

<style scoped>
.header {
    border: 2px solid red;
    height: 50px;
    padding: 2px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 100px;
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