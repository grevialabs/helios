// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AddTicket from './components/AddTicket.vue';
Vue.use(VueRouter);

const routes = [
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