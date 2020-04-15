<template>
    <form class="form-signin" @submit.prevent="updateProduct">
          <div class="text-center mb-4">
              <h1>Update Product</h1>
          </div>

          <div class="form-label-group">
            <input v-model='product.name' type="text" id="name" class="form-control" placeholder="Product Name" required autofocus>
            <label for="name">{{ detail.name }}</label>
          </div>

          <div class="form-label-group">
            <input v-model='product.image_url' type="text" id="image_url" class="form-control" placeholder="Image URL" required>
            <label for="image_url">{{ detail.image_url }}</label>
          </div>

          <div class="form-label-group">
            <input v-model='product.price' type="number" id="price" class="form-control" placeholder="Price" required>
            <label for="price">{{ detail.price }}</label>
          </div>

          <div class="form-label-group">
            <input v-model='product.stock' type="number" id="stock" class="form-control" placeholder="Stock" required>
            <label for="stock">{{ detail.stock }}</label>
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
        name: '',
        image_url: '',
        price: '',
        stock: ''
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
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.$toasted.error(err).goAway(5000)
          console.log(err)
        })
    }
  },
  computed: {
    detail () {
      return this.$store.state.detail
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.fetchDetail()
    }
  }
}
</script>

<style>

</style>
