import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Tutorial from './views/Tutorial.vue'
import Post from './views/Post.vue'
import PostById from './components/PostById.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: { name: 'post' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/post/:slug',
      name: 'postById',
      component: PostById
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
