<template>
    <div class="one">
        <p style="font-weight: 800;">做法1：家庭版</p>
        <p v-show="arr[0]" v-for="s in szrp" :key="s">{{ s }}</p>
        <p v-show="arr[1]" v-for="s in ljcr" :key="s">{{ s }}</p>
        <p v-show="arr[2]" v-for="s in mxw" :key="s">{{ s }}</p>
        <p style="color: red;">请对该教程打分 <input type="number" v-model="jtbpj"><button>提交</button></p>
    </div>

</template>
<script>
export default {
    name: 'one'
}
import { ref, reactive, watch } from 'vue';
</script>
<script setup>
let szrp = {
    shenmocai: '水煮肉片',
    cailiao: '里脊肉 火锅底料 蔬菜',
    zuofa: '火锅底料煮沸放里脊肉片和蔬菜'
}
let ljcr = {
    shenmocai: '辣椒炒肉',
    cailiao: '五花肉 辣椒 ',
    zuofa: '五花肉炒熟放辣椒一起炒'
}
let mxw = {
    shenmocai: '毛血旺',
    cailiao: '鸭血 蔬菜 火锅底料 干辣椒段 ',
    zuofa: '鸭血蔬菜放火锅底料煮熟后放辣椒段'
}
let duibi = ['水煮肉片', '辣椒炒肉', '毛血旺'];
let jtbpj = ref(9);
let arr = [true, false, false];
defineExpose({ jtbpj, otherValue: 111 });
const props = defineProps(['currentDish']);


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
.one {
    width: 400px;
    height: 260px;
    background-color: aqua;
    float: left;
    margin-left: 30px;
    margin-right: 6px;
}

button {
    margin-left: 3px;
}
</style>