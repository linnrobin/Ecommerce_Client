<template>
        <form class="form-signin" @submit.prevent="addUser">
          <div class="text-center mb-4">
              <h1>Add User</h1>
          </div>

          <div class="form-label-group">
            <select v-model='user.role' class="form-control form-control-lg align-center" id="role" required>
              <option value="" disabled></option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
              <label v-if="user.role" for="role"></label>
              <label v-else for="role">-- Please Choose Role --</label>
          </div>

          <div class="form-label-group">
            <input v-model='user.email' type="email" id="email" class="form-control" placeholder="Email" required autofocus>
            <label for="email">Email</label>
          </div>

          <div class="form-label-group">
            <input v-model='user.password' type="password" id="password" class="form-control" placeholder="Password" required>
            <label for="password">Password</label>
          </div>

          <div class="form-label-group">
            <input v-model='user.confirm' type="password" id="confirm" class="form-control" placeholder="Confirm Password" required>
            <label for="confirm">Confirm Password</label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Add User</button>
        </form>
</template>

<script>
export default {
  name: 'AddUserForm',
  data () {
    return {
      user: {
        email: '',
        password: '',
        confirm: '',
        role: ''
      }
    }
  },
  methods: {
    addUser () {
      if (this.user.confirm !== this.user.password) {
        this.$toasted.error('Password and Confirm is not the same').goAway(5000)
      } else {
        this.$store.dispatch('addUser', { email: this.user.email, password: this.user.password, role: this.user.role })
          .then(result => {
            this.user.role = ''
            this.user.email = ''
            this.user.password = ''
            this.user.confirm = ''
            this.$toasted.success(result.data.message).goAway(5000)
            this.$router.push('showUsers')
          })
          .catch(err => {
            this.$toasted.error(err.response.data.errors[0].message).goAway(5000)
          })
      }
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.$store.commit('SET_ISUSERSPAGE', false)
    }
  }
}
</script>

<style>

</style>
