import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAxios, axios);

if (location.host == "localhost:8080") {
  Vue.http.options.root = 'http://localhost:3000/api'
} else {
  Vue.http.options.root = 'http://a1-api.herokuapp.com/api'
}
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});

const router = new VueRouter({
  routes,
  // works in developmemt mode with webpack, but the server will need to be configured to return all cases
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
