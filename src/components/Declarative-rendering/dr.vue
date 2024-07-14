<template>
    <div id="box">
        <h1>声明式渲染</h1>
        <div class="p">能在改变时触发更新的状态被称作是响应式的。我们可以使用 Vue 的 reactive() API 来声明响应式状态。由 reactive() 创建的对象都是 JavaScript
            Proxy，其行为与普通对象一样
        </div>
        <div class="item">
            <p>信息：{{ msg }}</p>
            <p>信息来源：{{ msgsource.source }}</p>
        </div>
        <h1>Attribute 绑定</h1>
        <div class="p">
            在 Vue 中，mustache 语法 (即双大括号) 只能用于文本插值。为了给 attribute 绑定一个动态值，需要使用 v-bind 指令
        </div>
        <div class="item">
            <div></div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
let msg = ref('油罐车混装事件')
let msgsource = reactive({ source: '新闻联播 ' })
</script>

<style scoped>
.p {
    width: 1100px;
    border: 1px solid rgb(21, 20, 20);

}

.item {
    width: 1098px;
    border: 2px solid rgb(44, 14, 177);
}
</style>