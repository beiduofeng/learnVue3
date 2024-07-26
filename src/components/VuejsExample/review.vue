<template>
    <h3>复习</h3>
    <p>今天喝了一杯ref()
        <span class="red">{{ name }}</span>,它居然 <span class="red">{{ price }}</span> 元,看了看配料，里面有reaction([]): <span
            class="red" v-for="i in ingredieat">{{
                i }},</span>
    </p>
    <p>
        今天晚餐有reaction({})水果 <span class="red">{{ dinner.fruit }}</span>，蔬菜 <span class="red">{{ dinner.vegetable
            }}</span>，主食 <span class="red">{{ dinner.food }}</span>
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
    <h5> 单向数据绑定:value 当数据发生改变时, 视图会自动更新. 但用户手动更改 input 的值, 数据不会自动更新</h5>
    单向数据绑定 <input type="text" :value="name">
    <h5>双向数据绑定 当数据发生改变时, 视图会自动更新. 当用户手动更改 input 的值, 数据也会自动更新对于 input框, v-model 绑定的是 input 元素的 value 属性</h5>
    双向数据绑定 <input type="text" v-model="modalvalue">
    <h5 type="text"> 单选框:对于 input type="radio">, v-model 绑定的是 input 元素的选中状态</h5>
    <input type="radio" v-model="data.radio" value="1">写作
    <input type="radio" v-model="data.radio" value="2">画画
    <h5>复选框: 对于 input type="checkbox">, v-model 绑定的是 input 元素的选中状态</h5>
    <input type="checkbox" v-model="data.checkbox" value="a">写作
    <input type="checkbox" v-model="data.checkbox" value="b">画画
    <input type="checkbox" v-model="data.checkbox" value="c">运动
    <h5>记住密码</h5>
    <input type="checkbox" v-model="data.remember1">记住账号
    <input type="checkbox" v-model="data.remember2">记住密码
    <h5>下拉框：对于 select>, v-model 绑定的是 select 元素的选中状态</h5>
    <select v-model="data.select">
        <option value="">请选择</option>
        <option value="A">写作</option>
        <option value="B">画画</option>
        <option value="C">运动</option>
    </select>
    <p>实时渲染 <input type="text" v-model="data.text"> </p>
    <p>在失去焦点或按下回车键之后渲染 <input type="text" v-model.lazy="data.text"> </p>
    <!-- 输入 100人, data.nums 的值仍为 100 -->
    <p> 输入框的值转换为数字类型 <input type="text" v-model.number="tonumber">??????????????</p>
    <p>去除首尾空格 <input type="text" v-model.trim="data.text"></p>
    <h5>v-text ,v-html</h5>
    <p v-text="texthtml.url"> </p>
    <p v-html="texthtml.url"></p>
    <h5>方法-无缓存</h5>
    <h5>计算属性-有缓存 [计算属性根据其依赖的响应式数据变化而重新计算]</h5>
    <h5>侦听器watch</h5>

    <div class="footer"></div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import A from '../practice/a.vue';
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
let modalvalue = ref('modalvalue')
const data = reactive({
    text: "sjycode.com", //文本框
    radio: "", //单选框
    checkbox: [], //复选框
    remember1: false, //单个复选框-记住密码
    remember2: false,
    select: "" //下拉框
})
let tonumber = ref()
let texthtml = reactive({
    url: "<i>http://127.0.0.1:5173/?newlabel=d#/14</i>"
})




</script>
<style scoped>
.red {
    color: red;
}

.footer {
    height: 160px;
}
</style>