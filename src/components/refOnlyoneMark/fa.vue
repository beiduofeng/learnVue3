<template>
    <refMark ref="ren" />
    <button @click="show">输出ren.value</button>
</template>

<script lang="ts">
import refMark from './son/refMark.vue'
import { ref, setup } from 'vue'
export default {
    name: 'Fa',
    components: { refMark },
    setup() {
        let ren = ref()
        function show() {
            //取不到person组件里面定义的数据
            console.log(ren.value);
        }
        return { ren, show }
    }
}

</script>

<style scoped></style>