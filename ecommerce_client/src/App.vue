<template>
  <div id="app" >
    <div v-if="isLogin" id="nav">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/users">Users</router-link> |
      <a @click.prevent="logout" href="#">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGIN', false)
      this.$toasted.success('Log Out Successfully').goAway(5000)
      this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
body {
  align-items: flex-start;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
