<template>
  <div class="d-flex flex-column align-items-center">
      <h1>Dashboard Page</h1>
      <div class="row m-3 font-weight-bold justify-content-center">
        <div class="card align-self-stretch text-white bg-success m-3" style="min-width: 12rem; max-width: 18rem;">
          <div class="card-header bg-white text-success">Total Products</div>
          <div class="card-body">
            <h5 class="card-title">{{ totalProducts }}</h5>
          </div>
        </div>
        <div class="card align-self-stretch text-white bg-secondary m-3" style="min-width: 12rem; max-width: 18rem;">
          <div class="card-header bg-white text-secondary">Total Users</div>
          <div class="card-body">
            <h5 class="card-title">{{ totalUsers }}</h5>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  computed: {
    totalProducts () {
      return this.$store.state.products.length
    },
    totalUsers () {
      return this.$store.state.users.length
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.$store.dispatch('fetchProduct')
      this.$store.dispatch('fetchUser')
    }
  }
}
</script>

<style>

</style>
