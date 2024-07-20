<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axislabel v-for="(stat, index) in stats" :stat="stat" :index="index" :total="stats.length"></axislabel>
    </g>


</template>
<script setup>
import axislabel from './axislabel.vue'
import { computed } from 'vue';
import { valueToPoint } from './util.js'
const props = defineProps({
    stats: Array
})
const points = computed(() => {
    const total = props.stats.length
    return props.stats
        .map((stat, i) => {
            const { x, y } = valueToPoint(stat.value, i, total)
            return `${x},${y}`
        })
        .join(' ')
})
</script>
<style scoped>
polygon {
    fill: #4283b9;
    opacity: 0.75;
}

circle {
    fill: transparent;
    stroke: #999;
}

text {
    font-size: 10px;
    fill: #666;
}
</style>