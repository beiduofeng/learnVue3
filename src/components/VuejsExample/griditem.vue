<template>
    <table v-if="filteredData.length">
        <thead>
            <tr>
                <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">{{ capitalize(key)
                    }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns">{{ entry[key] }}</td>
            </tr>
        </tbody>
    </table>
    <p v-else>未找到匹配项</p>
</template>
<script setup>
import { ref, computed, defineProps } from 'vue';
const props = defineProps({
    data: Array,
    columns: Array,
    filterKey: String
})

const sortKey = ref('')
const sortOrders = ref(
    //筛选数组reduce()
    props.columns.reduce((o, key) => ((o[key] = 1), o), {})
)

const filteredData = computed(() => {
    let { data, filterKey } = props
    if (filterKey) {
        filterKey = filterKey.toLowerCase()
        data = data.filter((row) => {
            return Object.keys(row).some((key) => {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
        })
    }
    const key = sortKey.value
    if (key) {
        const order = sortOrders.value[key]
        data = data.slice().sort((a, b) => {
            a = a[key]
            b = b[key]
            return (a === b ? 0 : a > b ? 1 : -1) * order
        })
    }
    return data
})
function sortBy(key) {
    sortKey.value = key
    sortOrders.value[key] *= -1
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>
<style scoped>
table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: #8bcf61;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}

th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}
</style>