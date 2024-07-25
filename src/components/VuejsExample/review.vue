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
</script>
<style scoped>
.red {
    color: red;
}
</style>