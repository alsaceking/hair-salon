import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: ':id',
          name: 'barbershopdetails',
          component: () => import('@/components/barber-shop-details/barber-shop-details.vue')
        }
      ]
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/Activity.vue')
    },
    {
      path: '/share',
      name: 'share',
      component: () => import('@/views/Share.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/Order.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    }
  ]
})
