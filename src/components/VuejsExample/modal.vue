<template>
    <button id="show-modal" @click="showModal = true">显示模态</button>
    <modalbox :show="showModal" @close="showModal = false">
        <template #header>
            <h3>Custom Header</h3>
        </template>
    </modalbox>
</template>
<script setup>
import modalbox from './modalbox.vue'
import { ref } from 'vue'
const showModal = ref(false)
</script>
<style scoped></style>