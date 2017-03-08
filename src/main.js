import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/api'
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    request.credentials = true;
    next();
});


function login() {
  console.log('???????', store.state.loggedIn);
  store.state.loggedIn = true;
  console.log('???????', store.state.loggedIn);
}

const router = new VueRouter({
  routes,
  // works in developmemt mode with webpack, but the server will need to be configured to return all cases
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   console.log('global beforeEach');
//   if (true) {
//     next()
//   } else {
//     next(false)
//   }
// });


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
