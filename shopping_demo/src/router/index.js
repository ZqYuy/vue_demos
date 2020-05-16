import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shopping from '@/components/Shopping'
import parent from '@/components/ParentComponent'
import a from '@/components/A'
import vuexDemo from '@/components/vuexDemo'
import vueDemo2 from '@/components/vueDemo2'
import testDemo from '@/components/testDemo'
import users from '@/components/users'

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
    },
    {
      path: '/vueDemo2',
      name: 'vueDemo2',
      component: vueDemo2
    },
    {
      path: '/testDemo',
      name: 'testDemo',
      component: testDemo
    },
    {
      path: '/users',
      name: 'users',
      component: users
    }
  ]
})
