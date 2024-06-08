<template>
    <div class="preson">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
        <button @click="changeBrand">修改名字</button>
        <button @click="changePrice">修改价格</button>
        <hr>
        <h2>新闻列表</h2>
        <ul>
            <li v-for="n in news" :key="n.id">{{ n.new }}</li>
        </ul>
        <button @click="changeNew">修改第一条新闻</button>
        <hr>
        <h3>{{ obj.a.b.c }}</h3>
        <button @click="change">修改上面数据</button>
    </div>
</template>

<script lang='ts'>
import { ref, reactive } from 'vue'
//ref创建基本类型响应式数据, 后面还可以创建对象类型
export default {
    name: 'Reactive',
}
</script>

<script lang="ts" setup>
//数据
let car = reactive({ brand: '奔驰', price: 100 })
let news = reactive([
    { id: 1, new: '震惊，上海楼盘大跳水' },
    { id: 2, new: '日本即将宣布亡国' },
    { id: 3, new: '普京大巴掌呼晕拜登' },
    { id: 4, new: '韩国街头惊现集体丧尸' }
])
//reactive可以深层次响应数据
let obj = reactive({
    a: {
        b: {
            c: 222
        }
    }
})

//方法
function changeBrand() {
    car.brand = '雅迪'
}
function changePrice() {
    car.price += 10
}
function changeNew() {
    news[0].new = "可以修改"
}
function change() {
    obj.a.b.c = 8888888
}
</script>
<style scoped>
.preson {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 2px;
}
</style>