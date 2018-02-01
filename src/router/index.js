import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Quotes from '@/components/Quotes'
import Submit from '@/components/Submit'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/quotes', component: Quotes },
    { path: '/submit', component: Submit },
    { path: '/about', component: About }
  ]
})
