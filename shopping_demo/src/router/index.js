import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shopping from '@/components/Shopping'
import parent from '@/components/ParentComponent'
import a from '@/components/A'
import vuexDemo from '@/components/vuexDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/vuexDemo',
      name: 'vuexDemo',
      component: vuexDemo
    }
  ]
})
