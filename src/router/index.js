import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/layout/index'
import outline from '@/components/outline'
import bv1de0 from '@/components/bv1de0'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          name: 'outline',
          component: outline
        },
        {
          path: '/bv1de0',
          name: 'bv1de0',
          component: bv1de0
        },
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
