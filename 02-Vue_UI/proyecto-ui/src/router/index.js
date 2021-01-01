import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import Post from '../components/Post.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: Post,
    meta: {
      auth: true,
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const authUser = true;

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !authUser) {
    next('/');
  } else {
    next();
  }
});

export default router;
