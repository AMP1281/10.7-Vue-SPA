import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//Lazy loading todo menos home (only loads what you need when you need it, web faster)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients/:id',//:hace la ruta dinamica
    name: 'Clients',
    component: () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: () => import(/* webpackChunkName: "proveidors" */ '../views/Proveidors.vue')
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: () => import(/* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
  },
  {
    path: '/botiga',
    name: 'Botiga',
    component: () => import(/* webpackChunkName: "botiga" */ '../views/Botiga.vue')
  },
  {
    path:'/clientsdetails/:id',
    name:'Details',
    component: () => import(/* webpackChunkName: "details" */ '../views/ClientsDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
