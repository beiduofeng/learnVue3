<template>
    <div class='sun'>
        子
        <h5>{{ qqq }}</h5>
    </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { defineProps } from 'vue'
let qqq = ref(123)

</script>

<style scoped>
.sun {
    border: 1px solid red;
}
</style>