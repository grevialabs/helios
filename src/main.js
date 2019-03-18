// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import dotenv from 'dotenv';
// import config from '../config.js';


import HelloWorld from './components/HelloWorld.vue';
import FirstRoute from './components/FirstRoute.vue';
import AddTicket from './components/AddTicket.vue';
import TicketView from './components/TicketView.vue';

const config  = require('../config')
// import config from '../config';
// console.log(config);

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(config);

// window.config = config;
// console.log(process.env);
// console.log(config);
// console.log('ayamgoreng');

const routes = [
  {
    name: 'ticket_view',
    path: '/',
    component: TicketView
  },
  {
    name: 'first',
    path: '/',
    component: FirstRoute
  },
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