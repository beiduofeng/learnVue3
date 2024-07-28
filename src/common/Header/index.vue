<template>
    <div class="header">
        <div class="logo"> learnVue3 </div>
        <div class="right">
            <div class="tabs">
                <span>js</span>
                <span>vue</span>
                <span>elementplus</span>
            </div>
            <div class="links">
                <!-- list map -->
                github
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
</style>