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
      path: '/proposals',
      name: 'proposals',
      component: () => import(/* webpackChunkName: "proposals" */ './views/Proposals.vue'),
    },
    {
      path: '/proposals/:id',
      name: 'proposal',
      component: () => import(/* webpackChunkName: "proposal" */ './views/Proposal.vue'),
    },
    {
      path: '/create-proposal',
      name: 'create-proposal',
      component: () => import(/* webpackChunkName: "create-proposal" */ './views/CreateProposal.vue'),
    },
    {
      path: '/players/:id',
      name: 'player',
      component: () => import(/* webpackChunkName: "player" */ './views/Player.vue'),
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
