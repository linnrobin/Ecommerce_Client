<template>
  <div>
      Dashboard Page
      <div>
        <product v-for="product in products" :key="product.id" :product="product" />
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click.prevent="logout">Sign Out</button>
  </div>
</template>

<script>
import axios from 'axios'
import Product from '@/components/Product.vue'

export default {
  name: 'DashboardPage',
  components: {
    Product
  },
  data () {
    return {
      baseUrl: 'http://localhost:3000',
      products: []
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      axios({
        method: 'GET',
        url: this.baseUrl + '/products',
        headers: {
          access_token: localStorage.token
        }
      })
        .then(result => {
          this.products = result.data.result
          console.log('Products', this.products)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
