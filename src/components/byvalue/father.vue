<template>
    <div class='fa'>
        <h2>父</h2>
        <sun @sunvalue="qqq" />
        <p>{{ sunvalue }}</p>
    </div>
</template>

<script lang='ts' setup>
import sun from '@/components/byvalue/sun.vue'
import { ref } from 'vue'
const sunvalue = ref('')
const qqq = (value) => {
    sunvalue.value = value;
}

</script>

<style scoped>
.fa {
    border: 2px, solid, black
}
</style>