import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // localhost
    baseUrl: 'http://localhost:3000',

    // heroku
    // baseUrl: 'https://ecommerce-server-robin.herokuapp.com',

    isLogin: false,
    products: [],
    detail: {},
    isProductsPage: true,
    users: [],
    isUsersPage: true
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCT (state, payload) {
      state.products = payload
    },
    SET_DETAIL (state, payload) {
      state.detail = payload
    },
    SET_ISPRODUCTSPAGE (state, payload) {
      state.isProductsPage = payload
    },
    SET_USER (state, payload) {
      state.users = payload
    },
    SET_ISUSERSPAGE (state, payload) {
      state.isUsersPage = payload
    }
  },
  actions: {
    fetchProduct (context, payload) {
      axios({
        method: 'GET',
        url: context.state.baseUrl + '/products',
        headers: {
          access_token: localStorage.token
        }
      })
        .then(result => {
          const products = result.data.result
          context.commit('SET_PRODUCT', products)
        })
        .catch(err => {
          this.$toasted.error(err).goAway(5000)
          console.log(err)
        })
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: context.state.baseUrl + '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: context.state.baseUrl + '/products',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.token
        }
      })
    },
    fetchDetail (context, payload) {
      return axios({
        method: 'GET',
        url: context.state.baseUrl + '/products/' + payload.id,
        headers: {
          access_token: localStorage.token
        }
      })
    },
    updateProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: context.state.baseUrl + '/products/' + payload.id,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.token
        }
      })
    },
    deleteProduct (context, payload) {
      return axios({
        method: 'DELETE',
        url: context.state.baseUrl + '/products/' + payload.id,
        headers: {
          access_token: localStorage.token
        }
      })
    },
    addUser (context, payload) {
      return axios({
        method: 'POST',
        url: context.state.baseUrl + '/users/register',
        data: {
          email: payload.email,
          password: payload.password,
          role: payload.role
        }
      })
    },
    fetchUser (context, payload) {
      axios({
        method: 'GET',
        url: context.state.baseUrl + '/users',
        headers: {
          access_token: localStorage.token
        }
      })
        .then(result => {
          const users = result.data.result
          context.commit('SET_USER', users)
        })
        .catch(err => {
          this.$toasted.error(err).goAway(5000)
          console.log(err)
        })
    }
  }
})

export default store
