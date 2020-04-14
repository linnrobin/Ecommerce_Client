<template>
        <form class="form-signin" @submit.prevent="login">
          <div class="text-center mb-4">
              <h1>ECommerce Admin Page</h1>
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
import axios from 'axios'

export default {
  name: 'LoginForm',
  // props: ['baseUrl', 'user'],
  data () {
    return {
      // localhost
      baseUrl: 'http://localhost:3000',

      // firebase
      // baseUrl: ''

      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: this.baseUrl + '/users/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(result => {
          localStorage.setItem('token', result.data.access_token)
          this.user.email = ''
          this.user.password = ''
          this.$router.push('dashboard')
          console.log('Successfully Logged In')
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
