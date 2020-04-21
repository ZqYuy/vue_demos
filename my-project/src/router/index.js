import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import direction from '@/components/direction'
import eventdeal from '@/components/EventDeal'
import styledemo from '@/components/StyleDemo'

Vue.use(Router)
export default new Router({
  // mode有两种模式，默认的是hash  带#，
  // 还有一种是history  不带#
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/hello',
    name: 'hello',
    // age: "10",
    component: hello
  },
  {
    path: '/direction',
    name: 'direction',
    component: direction
  },
  {
    path: '/eventdeal',
    name: 'eventdeal',
    component: eventdeal
  },
  {
    path: '/styledemo',
    name: 'styledemo',
    component: styledemo
  }
  ]
})
