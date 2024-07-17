<template>
    <p>表单绑定</p>

    <h2>文本输入框</h2>
    <input type="text" :value="text">
    <h2>复选框</h2>
    <input type="checkbox" v-model="checked">
    <label for="checkbox">Checked:{{ checked }}</label>
    <h2>多种复选框</h2>
    <input type="checkbox" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" value="sun" v-model="checkedNames">
    <label for="sun">sun</label>
    <p>checked Names:{{ checkedNames }}</p>
    <h2>单选框</h2>
    <input type="radio" value="男" v-model="picked">
    <label>男</label>
    <br>
    <input type="radio" value="女" v-model="picked">
    <label>女</label>
    <p>Picked: {{ picked }}</p>
    <h2>Select</h2>
    <select v-model="selected">
        <option disabled value="">选择一个</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <p>Selected: {{ selected }}</p>
    <h2>Multi Select</h2>
    <select v-model="multiSelected" multiple style="width:100px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <p>Selected: {{ multiSelected }}</p>

</template>
<script setup>
import { ref } from 'vue';
const text = ref('编辑...')
const checked = ref(true)
const checkedNames = ref(['sun'])
const picked = ref('男')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>
<style scoped></style>