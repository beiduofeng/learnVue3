<template>
    <div class="hot">
        <ol>
            <p style="margin-bottom: -1px;margin-left: -9px; font-size: large; color: red;">热榜菜品</p>
            <li v-for="hc in hotcai" :key="hc">{{ hc }}</li>
        </ol>
    </div>
    <tuangou></tuangou>
</template>
<script>
import { reactive } from 'vue'
import tuangou from '@/components/modules/tuangou.vue'
export default {
    name: 'hot',
    components: { tuangou }
}
</script>
<script setup>
let hotcai = reactive(['京酱肉丝', '蒜泥白肉', '北京烤鸭', '麻婆豆腐', '西湖醋鱼', '红烧肉', '麻辣香锅', '叫花鸡'])
</script>
<style scoped>
.hot {
    width: 120px;
    height: 200px;
    background-color: rgba(255, 0, 0, 0.168);
    margin-left: 5px;

}
</style>