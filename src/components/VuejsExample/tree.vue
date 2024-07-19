<template>
    <ul>
        <treeitem class="item" :model="treeData"> </treeitem>
    </ul>
</template>
<script setup>
import treeitem from "./treeitem.vue";
import { ref } from "vue";
const treeData = ref({
    name: 'My Tree',
    children: [
        { name: '1' },
        { name: '2' },
        {
            name: '3',
            children: [
                {
                    name: '11',
                    children: [{ name: '111' }, { name: '222' }]
                },
                { name: '22' },
                { name: '33' },
                {
                    name: 'child folder',
                    children: [{ name: '111' }, { name: '222' }]
                }
            ]
        }
    ]
})
</script>
<style scoped>
.item {
    cursor: pointer;
    line-height: 1.5;
}

.bold {
    font-weight: bold;
}
</style>