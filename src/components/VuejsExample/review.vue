<template>
    <h3>复习</h3>
    <p>今天喝了一杯
        <span class="red">{{ name }}</span>,它居然 <span class="red">{{ price }}</span> 元,看了看配料，里面有: <span class="red"
            v-for="i in ingredieat">{{
                i }},</span>
    </p>
    <p>
        今天晚餐有水果 <span class="red">{{ dinner.fruit }}</span>，蔬菜 <span class="red">{{ dinner.vegetable }}</span>，主食 <span
            class="red">{{ dinner.food }}</span>
    </p>
    <h4>明天吃什么？</h4>
    <button @click="see">点击参考</button>
    <!-- <p v-show="eat">{{ tomorroweat }}</p> -->
    <p v-show="eat"><button @click="yishi">10$参考餐</button> <button @click="ershi">20$参考餐</button> <button
            @click="sanshi">30$参考餐</button></p>
    <p v-if="n == 10">{{ pricefood[0] }}</p>
    <p v-else-if="n == 20">{{ pricefood[1] }}</p>
    <p v-else-if="n == 30">{{ pricefood[2] }}</p>
    <p>想吃啥?搜<input type="text" :value="xiangchisha" @focus="f" @change="ch" @blur="bl"></p>
    <p style="color: red;" v-if="xcs">很抱歉，没有!</p>
    <p>买张彩票吧，请输入0~99之间的任意数<input type="number" :value="goodnum" @change="goodnumchange" @focus="caipiaofocus"></p>
    <p>{{ jieguo }}</p>
</template>
<script setup>
import { ref, reactive } from 'vue';
let name = ref('草莓啵啵冰')
let price = ref(18)
let ingredieat = reactive(['草莓泥', '爆爆珠', '冰沙', '糖浆', '茉莉茶汤'])
let dinner = reactive({
    fruit: '西瓜',
    vegetable: '生菜',
    food: '米饭'
})
//let tomorroweat = reactive(['鸡胸肉', '水煮蛋', '菜馍'])
let eat = ref(false)
const see = () => {
    eat.value = !eat.value
    n.value = 0
}
let pricefood = reactive([
    ['炸鸡柳', '馒头'],
    ['米饭', '辣椒炒肉', '冰激凌'],
    ['麻辣香锅', '米饭', '奶茶', '蛋糕']
])
let n = ref()
const yishi = () => {
    n.value = 10
}
const ershi = () => {
    n.value = 20
}
const sanshi = () => {
    n.value = 30
}
let xiangchisha = ref('开封八大碗')
let xcs = ref(false)
const f = () => {
    xiangchisha.value = ''
    xcs.value = false
}
const ch = () => {
    xcs.value = true
}
const bl = () => {
    xiangchisha.value = '开封八大碗'
    xcs.value = false
}
let goodnum = ref()
let jieguo = ref('')
let wins = reactive([
    { num: 73, monery: 100000000 },
    { num: 51, monery: 10000 },
    { num: 22, monery: 100 }
])
const goodnumchange = () => {
    if (goodnum.value == wins[0].num) {
        jieguo.value = `一等奖，奖金${wins[0].monery}元`
    } else if (goodnum.value == wins[1].num) {
        jieguo.value = `二等奖，奖金${wins[1].monery}元`
    } else if (goodnum.value == wins[2].num) {
        jieguo.value = `三等奖，奖金${wins[2].monery}元`
    } else {
        jieguo.value = '没中奖，再来一张吧'
    }
}
const caipiaofocus = () => {


}
</script>
<style scoped>
.red {
    color: red;
}
</style>