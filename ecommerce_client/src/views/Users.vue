<template>
  <div>
      <div v-if="!isUsersPage"></div>
      <div v-else>
          <h1>Users Page</h1>
          <router-link to="/users/addUser">Add User</router-link>
      </div>
      <div class="row justify-content-center">
          <router-view />
      </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  computed: {
    isUsersPage () {
      return this.$store.state.isUsersPage
    }
  }
}
</script>

<style>

</style>
