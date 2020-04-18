<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.role }}</td>
  </tr>
</template>

<script>
export default {
  name: 'User',
  props: ['user']
}
</script>

<style>

</style>
