<template>
   <div class='fa' >
   <h2>父</h2>
   <sun a='qqq'/>
   </div>
</template>

<script lang='ts'>
import sun from '@/components/byvalue/sun.vue'
import {reactive,ref} from 'vue'
export default{
    name:'father',
    components:{sun}
    
}

</script>
<script lang='ts' setup>

</script>

<style scoped>
.fa{
border:2px,solid,black
}
</style>