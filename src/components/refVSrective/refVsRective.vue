<template>
    <div class="preson">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}元</h2>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改car</button>
        <h2>sum:{{ sum }}</h2>
        <button @click="sumadd">点我sum+1</button>
    </div>
</template>

<script lang='ts'>
import { ref, reactive } from 'vue'
//ref创建基本类型响应式数据, 后面还可以创建对象类型
export default {
    name: 'refVsRective',
}
</script>

<script lang="ts" setup>
//数据

let car = reactive({ brand: '爱玛', price: 1000 })
let sum = ref(0)
//方法
function changeBrand() {
    car.brand = '雅迪'
}
function changePrice() {
    car.price += 25
}
function changeCar() {
    //rective重新分配一个对象时，会失去响应式（可以用Object.assign整体替代）
    //car={brand:'爱玛!!!!!',price:10000000000}
    //此时点击过修改car之后，Car会变成一个普通数据，不再具有响应式，也就是let的Car已经失去响应式了
    //可以写下面的形式
    Object.assign(car, { brand: '烧饼', price: 8.99 })

    //如果是ref数据，可以这样修改整个数据  car.value={brand:'烧饼',price:8.99}

}
function sumadd() {
    sum.value += 1
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