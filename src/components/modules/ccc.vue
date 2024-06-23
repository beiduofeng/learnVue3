<template>
    <div class="two">
        <p style="font-weight: 800;">做法2：饭店版</p>
        <p v-show="true" v-for="s in szrp" :key="s">{{ s }}</p>
        <p v-show="false" v-for="s in ljcr" :key="s">{{ s }}</p>
        <p v-show="false" v-for="s in mxw" :key="s">{{ s }}</p>
        <p style="color: red;">请对该教程打分 <input type="number" v-model="fdbpj"><button>提交</button></p>
    </div>

</template>
<script>
export default {
    name: 'two'
}
import { ref, reactive } from 'vue';
</script>
<script setup>
let szrp = reactive({
    shenmocai: '水煮肉片:',
    cailiao: '水煮肉片料理包',
    zuofa: '加热 摆盘'
})
let ljcr = reactive({
    shenmocai: '辣椒炒肉:',
    cailiao: '辣椒炒肉料理包',
    zuofa: '加热 摆盘'
})
let mxw = reactive({
    shenmocai: '毛血旺:',
    cailiao: '毛血旺料理包 ',
    zuofa: '加热 摆盘'
})
let fdbpj = ref(10)
defineExpose({ fdbpj })
</script>
<style scoped>
.two {
    width: 400px;
    height: 260px;
    background-color: aquamarine;
    float: left;
}

button {
    margin-left: 5px;
}
</style>