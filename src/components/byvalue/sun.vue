<template>
   <div class='su'>
   子
   <h5>{{v}}</h5>
   </div>
</template>

<script lang='ts'>
import {reactive,ref} from 'vue'
import {defineProps} from 'vue'
export default{
    name:'sun'
}
</script>
<script lang='ts' setup>

</script>

<style scoped>
.su{
    border:1px solid red;
}
</style>