import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
