<template>
  <div class="container" id="landing">
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'LandingPage',
  components: {
    LoginForm
  },
  created () {
    if (localStorage.token) {
      this.$router.push('dashboard')
    }
  }
}
</script>

<style>
#landing {
  color: red
}
</style>
