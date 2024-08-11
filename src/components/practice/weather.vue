<template>
    <div class="query-weather">
        <!-- 地区选择 -->
        <span>城市名：</span>
        <input type="text" @keydown.enter="getCity" v-model="searchCity">
        <span class="current-result"> {{ weatherResultString }} </span>
        <div class="result">
            查询结果
            <ul>
                <li v-for="item in records" :key="item">{{ item }}</li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import axios from 'axios';

let weatherResult = reactive({}, false);

const weatherResultString = computed(() => {
    return (weatherResult.weather || '-') + ' '
        + (weatherResult.windDirection || '-') + ' '
        + (weatherResult.windPower || '-');
});

console.log('weatherResultString', weatherResultString)


const getWeather = (cityCode) => {
    axios({
        url: 'http://hmajax.itheima.net/api/weather',
        params: {
            city: cityCode
        }
    }).then(result => {
        console.log(result.data.data);
        weatherResult.weather = result.data.data.weather
        weatherResult.windDirection = result.data.data.windDirection
        weatherResult.windPower = result.data.data.windPower
        console.log(weatherResult);
        records.push({ '城市': searchCity.value, '天气': weatherResultString.value })
        searchCity.value = ''
    })


}
//搜索地区
let searchCity = ref('')
let records = []

const getCity = (search) => {
    axios({
        url: 'http://hmajax.itheima.net/api/weather/city',
        params: {
            city: searchCity.value
        }
    }).then(result => {
        console.log(result.data.data[0].code);
        let searchCityCode = result.data.data[0].code
        getWeather(searchCityCode)

    })
}
</script>

<style scoped>
.query-weather {
    margin-right: 40px;
}

.current-result {
    margin-left: 20px;
}

.result {
    margin: 12px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>