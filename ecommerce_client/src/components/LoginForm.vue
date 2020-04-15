<template>
        <form class="form-signin" @submit.prevent="login">
          <div class="text-center mb-4">
              <h1>ECommerce</h1>
              <h3>Admin Page</h3>
              <img src="../assets/logo.png" width="100px"/>
          </div>

          <div class="form-label-group">
            <input v-model='user.email' type="email" id="email" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input v-model='user.password' type="password" id="password" class="form-control" placeholder="Password" required>
            <label for="inputPassword">Password</label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      return this.$store.dispatch('login', { email: this.user.email, password: this.user.password })
        .then(result => {
          localStorage.setItem('token', result.data.access_token)
          this.$store.commit('SET_LOGIN', true)
          this.$toasted.success(`Welcome Back ${this.user.email}`).goAway(5000)
          this.user.email = ''
          this.user.password = ''
          this.$router.push('dashboard')
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
