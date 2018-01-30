import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageTwo from '@/components/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/yo',
      name: 'PageTwo',
      component: PageTwo
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
