##### toRefs 基本用法示例代码

相关的 API 有: ref, reactive, toRefs。比较使用 reactive 和不使用 reactive 的两种写法。

相关的 Api 可以参考

1. [ref](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref) 
2. [reactive](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive)  
3. [toRef](https://cn.vuejs.org/api/reactivity-utilities.html#torefs) 

-----

##### 三种 API 的基本用法

1. ref

```js
<button @click="count++">
  {{ count }}
</button>
import { ref } from 'vue'
const count = ref(0)
```

2. reactive

```js
import { reactive } from 'vue'
const state = reactive({ count: 0 })
<button @click="state.count++">
  {{ state.count }}
</button>
```
3. toRefs (见页面下部)

##### 总结

reactive 是 vue 实现响应式的一种 API，另一种 API 是 ref, toRefs 能够将 reactive 对象转换成多个 ref 变量。这在解构赋值消费 reactive 对象中的某个变量时非常有用。

除此之外，解构 reactive 对象的一个原因是 reactive 是深层监听对象变化的，比较耗时，当我们需要监测reactive中某个深层的数据时，用toRefs转换之后再解构出来作为基本类型数据再监测就比较高效。