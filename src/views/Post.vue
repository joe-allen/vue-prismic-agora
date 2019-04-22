<!-- Create file src/views/Page.vue -->

<template>
  <div class="wrapper">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Post',
  components: {
    Navigation
  }
}
</script>

<style>

</style>