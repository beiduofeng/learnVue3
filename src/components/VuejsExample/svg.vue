<template>
    <svg width="200" height="200">
        <polygraph :stats="stats"></polygraph>
    </svg>
    <div v-for="stat in stats">
        <label>{{ stat.label }}</label>
        <input type="range" v-model="stat.value" min="0" max="100">
        <span>{{ stat.value }}</span>
        <button @click="remove(stat)">X</button>
    </div>
    <form id="add">
        <input name="newlabel" v-model="newLabel">
        <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
</template>
<script setup>
import polygraph from './poly-graph.vue'
import { ref, reactive } from 'vue'
const newLabel = ref('')
const stats = reactive([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 }
])
function add(e) {
    e.preventDefault()
    if (!newLabel.value) return
    stats.push({
        label: newLabel.value,
        value: 100
    })
    newLabel.value = ''
}

function remove(stat) {
    if (stats.length > 3) {
        stats.splice(stats.indexOf(stat), 1)
    } else {
        alert("Can't delete more!")
    }
}
</script>
<style scoped>
#raw {
    position: absolute;
    top: 0;
    left: 700px;
}
</style>