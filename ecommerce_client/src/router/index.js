import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Dashboard from '../views/Dashboard.vue'
import Detail from '../views/Detail.vue'
import AddProduct from '../views/AddProduct.vue'
import UpdateProduct from '../views/UpdateProduct.vue'
import AddUser from '../views/AddUser.vue'
import Products from '../views/Products.vue'
import ShowProducts from '../views/ShowProducts.vue'
import Users from '../views/Users.vue'
import ShowUsers from '../views/ShowUsers.vue'

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
    path: '/products',
    component: Products,
    children: [
      {
        path: '',
        name: 'parentProducts',
        redirect: { name: 'showProducts' }
      },
      {
        path: 'showProducts',
        name: 'showProducts',
        component: ShowProducts
      },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: AddProduct
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail
      },
      {
        path: '/updateProduct/:id',
        name: 'updateProduct',
        component: UpdateProduct
      }
    ]
  },
  {
    path: '/users',
    component: Users,
    children: [
      {
        path: '',
        name: 'parentUsers',
        redirect: { name: 'showUsers' }
      },
      {
        path: 'showUsers',
        name: 'showUsers',
        component: ShowUsers
      },
      {
        path: 'addUser',
        name: 'addUser',
        component: AddUser
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
