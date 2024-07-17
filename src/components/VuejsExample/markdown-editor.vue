<template>
    <p>一个简单的markdown编辑器</p>
    <div class="editor">
        <textarea class="input" :value="input" @input="update"></textarea>
        <div class="output" v-html="output"></div>
    </div>
</template>
<script setup>
import { marked } from 'markdown'
import { debounce } from 'lodash-es'
import { ref, computed } from 'vue'

const input = ref('#hello')
const output = computed(() => {
    marked(input.value)
})
const update = debounce((e) => {
    input.value = e.target.value
}, 100)
</script>
<style scoped></style>