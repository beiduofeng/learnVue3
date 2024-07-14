<template>
    <div class="preson">
        <img v-for="(dog, index) in dogList" :src="dog" :key="index"><br>
        <button @click="getAndAddDog">再来一只小狗</button>
        <h3>一共{{ dogs }}只小狗了</h3>
    </div>
</template>

<script lang="ts">

</script>
<script lang="ts" setup>
import useDog from '@/hooks/useDog';
const { dogs, dogList, addDog, getDog } = useDog()

const getAndAddDog = () => {
    getDog();
    // getDog 成功之后才能 addDog
    addDog();

}
</script>
<style scoped>
.preson {
    background-color: pink;
    box-shadow: 0 0 10px;
    padding: 20px;
    margin: 15px;
}

img {
    height: 100px;
    margin-right: 3px;
}
</style>