import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import direction from '@/components/direction'
import eventdeal from '@/components/EventDeal'
import styledemo from '@/components/StyleDemo'
import computedemo from '@/components/ComputeDemo'
import watchdemo from '@/components/WatchDemo'
import ajaxdemo from '@/components/AjaxDemos'
import ajaxdemo2 from '@/components/AjaxDemos2'
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
    component: hello
  },
  {
    path: '/direction',
    name: 'direction',
    component: direction
  },
  // {
  //   path: '/eventdeal/:id,:name',
  //   name: 'eventdeal',
  //   component: eventdeal
  // },
  // zh
  {
    path: '/eventdeal/:id/:name',
    name: 'eventdeal',
    component: eventdeal
  },
  {
    path: '/styledemo',
    name: 'styledemo',
    component: styledemo
  },
  {
    path: '/computedemo',
    name: 'computedemo',
    component: computedemo
  },
  {
    path: '/watchdemo',
    name: 'watchdemo',
    component: watchdemo
  },
  {
    path: '/ajaxdemo',
    name: 'ajaxdemo',
    component: ajaxdemo
  },
  {
    path: '/ajaxdemo2',
    name: 'ajaxdemo2',
    component: ajaxdemo2
  }
  ]
})
