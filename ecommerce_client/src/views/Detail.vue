<template>
  <div v-if="product.name">
    <h1>Detail Page</h1>
    <img :src="product.image_url" width="200px" height="200px"/>
    <h2> NAME: {{ product.name }} </h2>
    <h2> PRICE: {{ product.price }} </h2>
    <h2> STOCK: {{ product.stock }} </h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailPage',
  data () {
    return {
      baseUrl: 'http://localhost:3000',
      product: {}
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      const id = this.$route.params.id

      axios({
        method: 'GET',
        url: this.baseUrl + '/products/' + id,
        headers: {
          access_token: localStorage.token
        }
      })
        .then(result => {
          console.log(result)
          this.product = result.data.result
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
