import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/starships',
      name: 'starships',
      // route level code-splitting
      // this generates a separate chunk (starships.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "starships" */ './views/Starships.vue')
    },
    {
      path: '/starship/:id',
      name: 'starship',
      // route level code-splitting
      // this generates a separate chunk (starships.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "starships" */ './views/Starship.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      // route level code-splitting
      // this generates a separate chunk (character.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "character" */ './views/Character.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      // route level code-splitting
      // this generates a separate chunk (characters.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "characters" */ './views/Characters.vue')
    }
  ]
});
