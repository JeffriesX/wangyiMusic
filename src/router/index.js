import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Find from '@/views/layout/find'
import User from '@/views/layout/user'
import Music from '@/views/layout/music'
import Cloud from '@/views/layout/cloud'

import Findmusic from '@/views/findmusic'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/find',
      children: [
        { path: '/find', component: Find },
        { path: '/user', component: User },
        { path: '/music', component: Music },
        { path: '/cloud', component: Cloud }
      ]
    },
    { path: '/findmusic/:id', component: Findmusic }
  ]
})

export default router
