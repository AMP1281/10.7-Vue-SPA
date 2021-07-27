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
    path: '/users/:id',//:hace la ruta dinamica
    name: 'Clients',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path:'/clientsdetails/:id',
    name:'Details',
    component: () => import(/* webpackChunkName: "detailsUsers" */ '../views/ClientsDetails.vue')
  },
  {
    path: '/pictures/:id',//:hace la ruta dinamica
    name: 'Pictures',
    component: () => import(/* webpackChunkName: "pictures" */ '../views/Pictures.vue')
  },
  {
    path:'/picturesdetails/:id',
    name:'PicDetails',
    component: () => import(/* webpackChunkName: "detailsPictures" */ '../views/PicturesDetails.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
