<template>
    <div class="cai">
        <p>
            <select v-model="currentDish">
                <option v-for="c in caipin" :key="c"> {{ c }}</option>
            </select>
            {{ currentDish }}
        </p>
        <one ref="jtbpj" :currentDish="currentDish"></one>
        <two ref="fdbpj"></two>
        <p style="margin-left: 31px;">家庭版评价: {{ jtbpj ? jtbpj.jtbpj : '没有纸' }}分&nbsp &nbsp &nbsp饭店版评价：{{ fdbpj }}分</p>
        {{ jtbpj || 'MO' }}
    </div>


</template>
<script>
export default {
    name: "caipin",
    components: { one, two }
}
import { ref, reactive, watch, computed } from 'vue';
import { RouterView } from 'vue-router';
import one from '@/components/modules/bbb.vue'
import two from '@/components/modules/ccc.vue'
</script>
<script setup>
let caipin = reactive([
    '水煮肉片', '辣椒炒肉', '毛血旺'
])
let jtbpj = ref()

const homeScore = computed({
    get: () => {
        return jtbpj.value?.jtbpj
    },
})


console.log('homeScore', homeScore)



let fdbpj = ref()

const currentDish = ref('水煮肉片')

</script>
<style scoped>
.cai {
    width: 900px;
    height: 400px;
    background-color: antiquewhite;
    margin-left: 6px;
}
</style>