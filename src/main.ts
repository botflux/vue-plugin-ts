import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/hello-plugin';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount('#app');

console.log('Vue', Vue.$hello);
console.log('App instance', Vue.$hello);
