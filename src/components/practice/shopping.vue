<template>
    <p>购物车</p>
    <table>
        <thead>
            <tr>
                <td><input type="checkbox" v-model="data.selected" @change="selectAll" /></td>
                <td>商品</td>
                <td>价格</td>
                <td>库存</td>
                <td colspan="2">操作</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, index) in data.list">
                <td><input type="checkbox" v-model="data.checkboxList" :value="value" @change="checkSelect" /></td>
                <td>{{ value.name }}</td>
                <td>{{ value.price }}</td>
                <td>{{ value.stock }}</td>
                <td>
                    <button @click="sub(value)">-</button>
                    {{ value.number }}
                    <button @click="add(value)">+</button>
                </td>
                <td><button @click="del(index, value.id)">删除</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>总价:{{ totalPrice() }} </td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import { reactive } from 'vue';
const setjihe = new Set(['1', '2', '3'])
console.log(setjihe);
console.log(setjihe[0]);
const data = reactive({
    selected: false,
    checkboxList: [],
    list: [{
        id: 1,
        name: "铅笔",
        price: 10,
        number: 1,
        stock: 3
    },
    {
        id: 2,
        name: "鼠标",
        price: 20,
        number: 2,
        stock: 5
    },
    {
        id: 3,
        name: "键盘",
        price: 30,
        number: 1,
        stock: 6
    }],
})
//全选/反选
const selectAll = () => {
    if (data.selected) { //true
        data.checkboxList = data.list
    } else { //false
        data.checkboxList = []
    }
}
//加
const add = (value) => {
    value.number++

    if (value.number >= value.stock) {
        value.number = value.stock
    }
}
//减
const sub = (value) => {
    value.number--

    if (value.number <= 1) {
        value.number = 1
    }
}
//删除
const del = (index, id) => {
    data.list.splice(index, 1) //splice(要删除元素的索引位置, 要删除的元素数量)

    //filter 筛选符合条件的元素, 返回一个新的数组
    let newArr = data.checkboxList.filter((value, index) => {
        return value.id != id
    })
    data.checkboxList = newArr

    checkSelect() //检查勾选状态
}
//检查勾选状态
const checkSelect = () => {
    if (data.checkboxList.length != data.list.length || data.list.length == 0) {
        data.selected = false
    } else {
        data.selected = true
    }
}
//总价
const totalPrice = () => {
    let total = 0
    for (let i = 0; i < data.checkboxList.length; i++) {
        total += data.checkboxList[i].price * data.checkboxList[i].number
    }

    return total
}
</script>

<style scoped>
table {
    width: 600px;
    color: #eca94b;
    text-align: center;
    border-collapse: collapse;
}

table thead {
    background: #b70ba6;
}

table tr {
    height: 30px;
    line-height: 30px;
    border: 1px solid #e563cb;
}
</style>