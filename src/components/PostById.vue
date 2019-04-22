<!-- Create file src/views/Page.vue -->

<template>
  <div class="wrapper">
    <h1 class="title">
      {{ $prismic.richTextAsPlain(fields.post_title) }}
    </h1>
    <h2 class="title">
      {{ $prismic.richTextAsPlain(fields.post_sub_title) }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'postById',
  data () {
    return {
      documentId: '',
      fields: {
        post_author: null,
        post_author_image: null,
        post_body_content: null,
        post_call_to_action: null,
        post_date: null,
        post_hero_image: null,
        post_sub_title : null,
        post_title : null
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('basic_advertorial', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.post_author = document.data.post_author
            this.fields.post_author_image = document.data.post_author_image
            this.fields.post_body_content = document.data.post_body_content
            this.fields.post_call_to_action = document.data.post_call_to_action
            this.fields.post_date = document.data.post_date
            this.fields.post_hero_image = document.data.post_hero_image
            this.fields.post_sub_title = document.data.post_sub_title
            this.fields.post_title = document.data.post_title
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    },
    getUID (uid) {
      if(uid == undefined) {
        let url = window.location.href.split('/');
        for(let i = 0; i < url.length; i++) {
          if(url[i] == "post") {
            return this.getContent(url[i+1])
          }
        }
      } else {
        return this.getContent(uid)
      }
    }
  },
  created () {
    this.getUID(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style>

</style>