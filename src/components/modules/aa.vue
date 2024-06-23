<template>
    <div class="caixi">
        <p>今日菜系：{{ caixi }}</p>
        <caipin></caipin>
    </div>
    <div class="right">
        <!-- <hot></hot> -->
    </div>

</template>
<script>
export default {
    name: 'zong',
    components: { caipin, hot }
}
import { ref, reactive } from 'vue';
import { RouterView } from 'vue-router';
import caipin from '@/components/modules/aaa.vue'
import hot from '@/components/modules/hot.vue'
</script>/
<script setup>
let caixi = ref('川菜')
</script>
<style scoped>
.caixi {
    width: 1000px;
    height: 500px;
    background-color: rgb(142, 181, 215);
    margin-left: 6px;
}

.right {
    width: 130px;
    height: 500px;
    background-color: rgba(210, 129, 30, 0.418);
    position: absolute;
    top: 28px;
    right: 0px;
}
</style>