import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export var store = new Vuex.Store({
  state: {
    loggedIn: false
  }
});
