<template>
    <div class="time">
        <!-- 地区选择 -->
        <span>地区：<input type="text" @keydown.enter="getcity" v-model="searchcity"></span>
        <span id="weather"> {{ weather }},{{ windDirection }}{{ windPower }}</span>
        <ul>
            <li v-for="item in records" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


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
//搜索地区
let searchcity = ref('')
let records = []
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
        records.push({ '地区': searchcity.value, '天气': weather + '-' + windDirection + '-' + windPower })
        searchcity.value = ''
    })
}
</script>

<style scoped>
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
</style>