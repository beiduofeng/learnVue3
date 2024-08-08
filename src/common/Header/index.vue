<template>
    <div class="header">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="right">
            <div class="time">
                <span> {{ formattedDate }}</span>
                <span> {{ currentTime }}</span>
                <!-- 地区选择 -->
                <span>地区：<input type="text" @keydown.enter="getcity" v-model="searchcity"></span>
                <span id="weather"> {{ weather }},{{ windDirection }}{{ windPower }}</span>
            </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { result } from 'lodash-es';

//搜索地区
let searchcity = ref('')
const getcity = (search) => {
    axios({
        url: 'http://hmajax.itheima.net/api/weather/city',
        params: {
            city: searchcity.value
        }
    }).then(result => {
        console.log(result.data.data[0].code);
        let searchcityCode = result.data.data[0].code
        getWeather(searchcityCode)
        searchcity.value = ''
    })
}
//getcity('上海')
//时钟
const currentTime = ref();
function updateTime() {
    currentTime.value = new Date().toLocaleTimeString();
}
onMounted(() => {
    const intervalId = setInterval(updateTime, 1000); // 更新时间每秒一次
    const intervalId1 = setInterval(formattedDate.value, 24 * 60 * 60 * 1000);//一天一gengxin
    组件卸载时清除定时器
    onUnmounted(() => {
        clearInterval(intervalId);
        clearInterval(intervalId1);
    });
});


// 创建一个计算属性，用于格式化日期
const formattedDate = computed(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以+1，然后确保是两位数
    const day = String(today.getDate()).padStart(2, '0'); // 确保日期是两位数
    return `${year}-${month}-${day}`;
});

let weather = ''
let windDirection = ''
let windPower = ''
const getWeather = (cityCode) => {

    axios({
        url: 'http://hmajax.itheima.net/api/weather',
        params: {
            city: cityCode
        }
    }).then(result => {
        //console.log(result.data.data);
        weather = result.data.data.weather
        windDirection = result.data.data.windDirection
        windPower = result.data.data.windPower

    })
}
getWeather('110100')

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

.time {
    margin-right: 40px;
}

.time span {
    margin-right: 40px;
    display: inline-block;
    line-height: 28px;

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

input {
    width: 50px;
    height: 10px;
}

#weather {
    padding: 3px;
    background: linear-gradient(45deg, #e49881, #ed7ca7, #62c5e9, #58d4b7);
    border-radius: 16%;
}
</style>