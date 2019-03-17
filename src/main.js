// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';


import HelloWorld from './components/HelloWorld.vue';
import FirstRoute from './components/FirstRoute.vue';
import AddTicket from './components/AddTicket.vue';
import TicketView from './components/TicketView.vue';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
  {
    name: 'ticket_view',
    path: '/',
    component: TicketView
  },
  // {
  //   name: 'first',
  //   path: '/',
  //   component: FirstRoute
  // },
  {
    name: 'hello',
    path: '/hello',
    component: HelloWorld
  },
  {
    name: 'add',
    path: '/add',
    component: AddTicket
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')