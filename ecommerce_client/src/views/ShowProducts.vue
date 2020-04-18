<template>
    <div>
      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stok</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <product v-for="product in products" :key="product.id" :product="product" />
          </tbody>
        </table>
      </div>
  </div>

</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'showProducts',
  components: {
    Product
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.$store.dispatch('fetchProduct')
      this.$store.commit('SET_ISPRODUCTSPAGE', true)
    }
  }
}
</script>

<style>

</style>
