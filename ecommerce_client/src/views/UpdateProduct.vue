<template>
    <form class="form-signin" @submit.prevent="updateProduct">
          <div class="text-center mb-4">
              <h1>Update Product</h1>
          </div>

          <div class="form-label-group">
            <input v-model='product.name' type="text" id="name" class="form-control" placeholder="Product Name" required autofocus>
            <label for="name">Product Name</label>
          </div>

          <div class="form-label-group">
            <input v-model='product.image_url' type="text" id="image_url" class="form-control" placeholder="Image URL" required>
            <label for="image_url">Image URL</label>
          </div>

          <div class="form-label-group">
            <input v-model='product.price' type="number" id="price" class="form-control" placeholder="Price" required>
            <label for="price">Price</label>
          </div>

          <div class="form-label-group">
            <input v-model='product.stock' type="number" id="stock" class="form-control" placeholder="Stock" required>
            <label for="stock">Stock</label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Update Product</button>
    </form>
</template>

<script>
export default {
  name: 'updateProducts',
  data () {
    return {
      product: {
        name: this.$store.state.detail.name,
        image_url: this.$store.state.detail.image_url,
        price: this.$store.state.detail.price,
        stock: this.$store.state.detail.stock
      }
    }
  },
  methods: {
    fetchDetail () {
      const id = this.$route.params.id
      return this.$store.dispatch('fetchDetail', { id })
        .then(result => {
          const product = result.data.result
          this.$store.commit('SET_DETAIL', product)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('updateProduct', { id, name: this.product.name, image_url: this.product.image_url, price: this.product.price, stock: this.product.stock })
        .then(result => {
          this.product.name = ''
          this.product.image_url = ''
          this.product.price = ''
          this.product.stock = ''
          this.$toasted.success(result.data.message).goAway(5000)
          this.$router.push({ name: 'showProducts' })
        })
        .catch(err => {
          if (err.response.data.errors) {
            for (let i = 0; i < err.response.data.errors.length; i++) {
              this.$toasted.error(err.response.data.errors[i].message).goAway(5000)
            }
          } else {
            this.$toasted.error(err.response.data.name).goAway(5000)
          }
        })
    }
  },
  computed: {
    detail () {
      return this.$store.state.detail
    }
  },
  mounted () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.fetchDetail()
      this.$store.commit('SET_ISPRODUCTSPAGE', false)
    }
  }
}
</script>

<style>

</style>
