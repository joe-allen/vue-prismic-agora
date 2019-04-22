<template>
  <div class="nav">
    <ul>
      <li v-for="item in postItems" :key="item.uid"><router-link :to="{name: 'postById', params:{slug: item.slugs[0], uid: item.uid} }">{{ item.data.post_title[0].text }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { posts } from '../utils/routes.js'

export default {
  name: 'Nav',
  data () {
    return {
      postItems: null,
    }
  },
  async created() {
    let post = await posts();
    console.log('post   : ', post.results[0].slugs[0]);
    this.postItems = post.results;
  }
}
</script>

<style>
@import "../assets/css/resetr.css";
</style>
