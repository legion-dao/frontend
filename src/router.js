import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/daos',
      name: 'daos',
      component: () => import(/* webpackChunkName: "daos" */ './views/DAOs.vue'),
    },
    {
      path: '/daos/:id',
      name: 'dao',
      component: () => import(/* webpackChunkName: "dao" */ './views/DAO.vue'),
    },
    {
      path: '/players',
      name: 'players',
      component: () => import(/* webpackChunkName: "players" */ './views/Players.vue'),
    },
    {
      path: '/create-dao',
      name: 'create-dao',
      component: () => import(/* webpackChunkName: "create-dao" */ './views/CreateDAO.vue'),
    },
  ],
});
