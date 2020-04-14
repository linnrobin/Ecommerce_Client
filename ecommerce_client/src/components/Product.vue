<template>
<div>
  <router-link :to="{name: 'detail', params: {id: product.id}}">
    <img :src="product.image_url" width="200px" height="200px"/>
  </router-link>
  <h2> {{ product.name }} / {{ product.price }} </h2>
</div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<style>

</style>
