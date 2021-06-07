import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store/index'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'ModelType' },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/devicemodel',
        name: 'DeviceModel',
        component: () => import('../views/DeviceModel.vue')
      },
      {
        path: '/modeltype',
        name: 'ModelType',
        component: () => import('../views/ModelType.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: function(to, from, next) {
      if (store.state.isAuthenticated) next({ name: 'Home' })
      else next()
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
