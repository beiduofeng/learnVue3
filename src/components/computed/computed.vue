<template>
    <div class="preson">
        姓: <input type="text" v-model="firstname"><br><br>
        名: <input type="text" v-model="lastname"><br><br>
        全名：<span> {{ fullname }}</span>
        <button @click="changeFallName">点击修改全名</button>

    </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, toRef, computed } from 'vue'
export default {
    name: 'Computed',
}
</script>

<script lang="ts" setup>
//数据
let firstname = ref('sun')
let lastname = ref('jinyao')
//方法
function changeFallName() {
    fullname.value = "李-四"
}

function get() {
    return firstname.value + '-' + lastname.value

}
//计算属性
let fullname = computed({
    get,
    set(val) {
        console.log(val);
        const [str1, str2] = val.split('-')
        firstname.value = str1
        lastname.value = str2
    }
})
</script>
<style scoped>
.preson {
    background-color: pink;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

button {
    margin: 2px;
}
</style>