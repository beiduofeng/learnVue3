<template>
    <p>v-bind一次绑定多个属性,可以将要绑定的所有属性写成一个对象</p>
    <button v-bind="bind">button</button>

</template>

<script setup>

let bind = {
    id: 'styleid',
    class: 'styleclass',
    title: 'ti'
}
</script>

<style scoped></style>