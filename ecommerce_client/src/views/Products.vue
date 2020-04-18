<template>
    <div>
      <div v-if="!isProductsPage"></div>
      <div v-else>
        <h1>Product Page</h1>
        <router-link to="/products/addProduct">Add Product</router-link>
      </div>
      <div class="row justify-content-center">
          <router-view />
      </div>
    </div>

</template>

<script>
export default {
  name: 'Products',
  computed: {
    isProductsPage () {
      return this.$store.state.isProductsPage
    }
  }
}
</script>

<style>

</style>
