import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/helloworld/helloworld.vue'
import ToRefs from '@/components/toRefs/toRefs.vue'
import Parent from '@/components/parent2children/Parent.vue'
import Computed from '@/components/computed/computed.vue'
import Computerexaple from '@/components/computerexaple/computerexaple.vue'
import WatchRective from '@/components/watchRective/watchRective.vue'
import watchRef from '@/components/watchRef/watchRef.vue'
import watchEffect from '@/components/watchEffect/watchEffect.vue'
import refVsRective from '@/components/refVSrective/refVsRective.vue'
import deepWatch from '@/components/deepWatch/deepWatch.vue'
import Reactive from '@/components/reactive/reactive.vue'
import Ref from '@/components/ref/ref.vue'
import Fa from '@/components/refOnlyoneMark/fa.vue'
import Vue3 from '@/components/vue3/vue3.vue'
import watchRefPrimitiveType from '@/components/watchRefPrimitiveType/watchRefPrimitiveType.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/torefs',
      name: 'torefs',
      component: ToRefs,
    },
    {
      path: '/p2c',
      // name: 'p2c'
      component: Parent
    },
    {
      path: '/computed',
      // name: 'p2c'
      component: Computed
    },
    {
      path: '/computerexaple',
      component: Computerexaple
    },
    {
      path: '/watchrective',
      component: WatchRective
    },
    {
      path: '/watchref',
      component: watchRef
    },
    {
      path: '/refvsrective',
      component: refVsRective
    },
    {
      path: '/deepwatch',
      component: deepWatch
    },
    {
      path: '/reactive',
      component: Reactive
    },
    {
      path: '/ref',
      component: Ref
    },
    {
      path: '/fa',
      component: Fa
    },
    {
      path: '/vue3',
      component: Vue3
    },
    {
      path: '/watchRefPrimitiveType',
      component: watchRefPrimitiveType
    },
    {
      path: '/watcheffect',
      component: watchEffect
    },
  ]
})

export default router
