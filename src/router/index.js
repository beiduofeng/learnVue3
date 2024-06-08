import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/helloworld/helloworld.vue'
import ToRefs from '@/components/toRefs/toRefs.vue'
import Parent from '@/components/parent2children/Parent.vue'

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
      component: ToRefs
    },
    {
      path: '/p2c',
      // name: 'p2c'
      component: Parent
    },

  ]
})

export default router
