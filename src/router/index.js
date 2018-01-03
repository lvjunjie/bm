import Vue from 'vue'
import Router from 'vue-router'

import $ from  'jquery'
import _ from 'lodash'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import Login from '@/components/Login'


Vue.use(Router)
Vue.use(Element)
import init from '../js/init'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
