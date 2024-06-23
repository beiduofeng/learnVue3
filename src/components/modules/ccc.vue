<template>
    <div class="two">
        <p style="font-weight: 800;">做法2：饭店版</p>
        <p v-show="arr[0]" v-for="s in szrp" :key="s">{{ s }}</p>
        <p v-show="arr[1]" v-for="s in ljcr" :key="s">{{ s }}</p>
        <p v-show="arr[2]" v-for="s in mxw" :key="s">{{ s }}</p>
        <p style="color: red;">请对该教程打分 <input type="number" v-model="fdbpj"><button>提交</button></p>
    </div>

</template>
<script>
export default {
    name: 'two'
}
import { ref, reactive, watch } from 'vue';
</script>
<script setup>
let duibi = ['水煮肉片', '辣椒炒肉', '毛血旺'];
let fdbpj = ref(9);
let arr = [true, false, false];
defineExpose({ fdbpj, otherValue: 111 });
const props = defineProps(['currentDish']);
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

function shows() {
    console.log('shows func', props.currentDish)
    console.log('duibi.length, duibi.length', duibi.length)
    for (let i = 0; i < 3; i++) {
        console.log('i dish and duibi', i, props.currentDish, duibi[i]);
        console.log('????')
        if (props.currentDish == duibi[i]) {
            console.log('xiugai')
            arr[i] = true;
        } else {
            arr[i] = false;
        }
    }
    console.log('arr', arr)
}

watch(props, (n, old) => {
    shows()
})


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