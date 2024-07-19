<template>
    <li>
        <div @click="toggle" @dblclick="changeType">
            {{ model.name }}
            <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
            <treeitem class="item" v-for="model in model.children" :model="model"></treeitem>
            <li class="add" @click="addChild">+</li>
        </ul>
    </li>
</template>
<script setup>
import { ref, computed, defineProps } from 'vue';
const props = defineProps({
    model: Object
})
//console.log(props.model.children.length);
const isOpen = ref(false)
const isFolder = computed(() => {
    return props.model.children && props.model.children.length
})
const toggle = () => {
    isOpen.value = !isOpen.value
}
const changeType = () => {
    if (!isFolder.value) {
        props.model.children = []
        addChild()
        isOpen.value = true
    }
}
const addChild = () => {
    props.model.children.push({ name: '新增de' })
}

</script>
<style scoped>
.bold {
    font-weight: bold;
}
</style>