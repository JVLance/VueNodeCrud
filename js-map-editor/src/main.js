// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex';
import BlockUI from 'vue-blockui';

//vee-validate
import VeeValidate, {Validator} from 'vee-validate';
import validatorEs from './validator/es';

Validator.localize('es', validatorEs);

Vue.use(VeeValidate);



Vue.use(Vuex);
Vue.use(BlockUI);

import vStore from './store'


import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:3000';



const store = new Vuex.Store(vStore);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
