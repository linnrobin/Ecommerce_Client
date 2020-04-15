import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Dashboard from '../views/Dashboard.vue'
import Detail from '../views/Detail.vue'
import AddProduct from '../views/AddProduct.vue'
import UpdateProduct from '../views/UpdateProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/updateProduct/:id',
    name: 'updateProduct',
    component: UpdateProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
