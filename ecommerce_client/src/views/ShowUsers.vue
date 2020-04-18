<template>
  <div>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
            <user v-for="user in users" :key="user.id" :user="user" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'showUsers',
  components: {
    User
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push('/')
    } else {
      this.$store.commit('SET_LOGIN', true)
      this.$store.dispatch('fetchUser')
      this.$store.commit('SET_ISUSERSPAGE', true)
    }
  }
}
</script>

<style>

</style>
