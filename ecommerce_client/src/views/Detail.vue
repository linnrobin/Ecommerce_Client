<template>
  <div v-if="detail.name" class="board">
    <h1>Detail Page</h1>
    <img :src="detail.image_url" width="200px"/>
    <h3> NAME: {{ detail.name }} </h3>
    <h3> PRICE: {{ detail.price }} </h3>
    <h3> STOCK: {{ detail.stock }} </h3>
    <h3> CREATED BY: {{ detail.User.email }} </h3>
    <h3> CREATED AT: {{ detail.createdAt }} </h3>
    <h3> LAST UPDATED AT: {{ detail.updatedAt }} </h3>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  methods: {
    fetchDetail () {
      const id = this.$route.params.id
      return this.$store.dispatch('fetchDetail', { id })
        .then(result => {
          const product = result.data.result
          this.$store.commit('SET_DETAIL', product)
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
      this.$store.commit('SET_ISPRODUCTSPAGE', false)
    }
  }
}
</script>

<style>
.board {
  border-radius: 10px;
  background-color: lightgray;
  padding: 20px
}

</style>
