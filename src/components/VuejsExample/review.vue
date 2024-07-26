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
    <h5>侦听器watch::::: ref('')------ reaction({})------- reaction({某个属性})</h5>
    <select class="selectt" v-model="hobby">
        <option value="">请选择爱好</option>
        <option value="写作">写作</option>
        <option value="画画">画画</option>
        <option value="运动">运动</option>
        <option value="跳舞">跳舞</option>
        <option value="英语">英语</option>
    </select>
    <select class="selectt" v-model="date.year">
        <option value="">请选择年份</option>
        <option value="2023">2024</option>
        <option value="2024">2025</option>
        <option value="2025">2026</option>
        <option value="2024">2027</option>
        <option value="2025">2028</option>
    </select>
    <select class="selectt" v-model="date.month">
        <option value="">请选择月份</option>
        <option value="10">8</option>
        <option value="11">9</option>
        <option value="12">10</option>
        <option value="10">11</option>
        <option value="11">12</option>
        <option value="12">1</option>
        <option value="12">2</option>
        <option value="10">3</option>
        <option value="11">4</option>
        <option value="12">5</option>
        <option value="11">6</option>
        <option value="12">7</option>
    </select>
    <p>{{ newyear }}年{{ newmonth }}要学习{{ newhobby }}</p>



    <div class="footer"></div>
</template>
<script setup>
import { ref, reactive, watch, watchEffect } from 'vue';
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
let hobby = ref('')
const date = reactive({ //日期
    year: "",
    month: ""
})
let newhobby = ref('')
watch(hobby, (newvalue, oldvalue) => {
    newhobby = newvalue
})
//监听 date
let newyear = ref()
let newmonth = ref()
watch(date, (newValue, oldValue) => {
    /*
        JS中对象和数组是通过引用传递的, 而不是通过值传递
        当修改对象或数组的值时, 实际上修改的是对象或数组的引用, 而不是创建一个新的对象或数组
        所以，如果修改了对象或数组的值，那么打印出来的结果则是修改后的值
    */
    console.log("oldValue", oldValue, "newValue", newValue)
    newyear = newValue.year
    newmonth = newValue.month
})
//监听 date 中的某个属性 year
watch(() => date.year, (newValue, oldValue) => {
    console.log("oldValue", oldValue, "newValue", newValue)
})
/*
       watch需要显式指定要监听的属性, 并且只有当监听的属性发生变化时才会执行
       若需要更精细地控制或需要获取到原值, 需要使用watch
*/
//自动监听
watchEffect(() => {
    console.log('监听开始，hobby.value data.year data.month所有的数据豆浆被监测到');
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