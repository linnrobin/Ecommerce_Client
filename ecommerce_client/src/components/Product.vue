<template>
<tr>
  <td>{{ product.id }}</td>
  <td>{{ product.name }}</td>
  <td>{{ product.price }}</td>
  <td>{{ product.stock }}</td>
  <td>
    <router-link :to="{name: 'detail', params: {id: product.id}}">
      Detail
    </router-link> |
    <router-link :to="{name: 'updateProduct', params: {id: product.id}}">
      Update
    </router-link> |
    <a @click.prevent="deleteProduct">Delete</a>
  </td>
</tr>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    deleteProduct () {
      return this.$store.dispatch('deleteProduct', { id: this.product.id })
        .then(result => {
          this.$toasted.success(result.data.message).goAway(5000)
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          this.$toasted.error(err).goAway(5000)
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
