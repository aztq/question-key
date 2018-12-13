import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firsttopic from '@/components/firsttopic'
import stopic from '@/components/stopic'
import ttopic from '@/components/ttopic'
import ftopic from '@/components/ftopic'
import fifthtopic from '@/components/fifthtopic'
import result from '@/components/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/firsttopic',
      name: 'firsttopic',
      component: firsttopic
    },
    {
      path: '/stopic',
      name: 'stopic',
      component: stopic
    },
    {
      path: '/ttopic',
      name: 'ttopic',
      component: ttopic
    },
    {
      path: '/ftopic',
      name: 'ftopic',
      component: ftopic
    },
    {
      path: '/fifthtopic',
      name: 'fifthtopic',
      component: fifthtopic
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
})
