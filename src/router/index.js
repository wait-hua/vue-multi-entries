import Vue from 'vue'
import Router from 'vue-router'

import Module from 'pages/module/module'
import Rule from 'pages/rule/rule'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/module'
  },{
      path: '/module',
      name: 'module',
      component: Module
    },{
      path: '/rule',
      name: 'rule',
      component: Rule
    }
  ]
})
