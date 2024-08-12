<template>
    <div class="query-weather">
        <div class="up">
            <span>城市名：</span>
            <input placeholder="输入城市名回车查询" type="text" @keydown.enter="getCityCode" v-model="searchCity">
        </div>
        <div class="result">
            查询结果
            <ul>
                <li v-for="item in records" :key="item">
                    <span class="cw">{{ item.c }}</span>
                    <span class="cw">{{ item.w }}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import axios from 'axios';

let weatherResult = reactive({}, false);
//搜索地区
let searchCity = ref('');
let records = [];

const weatherUrl = 'http://hmajax.itheima.net/api/weather';
const cityCodeUrl = 'http://hmajax.itheima.net/api/weather/city';


// 字符串拼接，拼接天气，风的方向，风力
const weatherResultString = computed(() => {
    return (weatherResult.weather || '-') + ' '
        + (weatherResult.windDirection || '-') + ' '
        + (weatherResult.windPower || '-');
});


/**
 * getWeather 接口调用成功之后的逻辑
 * 记录到 records 并清空 input
 */
const afterGetWeather = () => {
    // 存到 records
    records.push({ 'c': searchCity.value, 'w': weatherResultString.value })
    // 清空
    searchCity.value = ''
}

/**
 * 调用接口，查询天气
 * @param cityCode 城市编码
 */
const getWeather = (cityCode, after) => {
    axios({
        url: weatherUrl,
        params: { city: cityCode }
    }).then(data => {
        const res = data.data.data || {};
        weatherResult.weather = res.weather;
        weatherResult.windDirection = res.windDirection;
        weatherResult.windPower = res.windPower;

        after();
    }).catch(error => {
        console.error('查询天气接口异常', error);
    });
}

/**
 * 根据数去的城市名获取对应的城市编码
 */
const getCityCode = () => {
    axios({
        url: cityCodeUrl,
        params: {
            city: searchCity.value
        }
    }).then(data => {
        const res = data.data.data || [];
        const searchCityCode = res[0].code
        getWeather(searchCityCode, afterGetWeather)
    })
}
</script>

<style scoped>
.up {
    margin: 12px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.cw {
    margin-right: 16px;
}

.result {
    margin: 12px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>