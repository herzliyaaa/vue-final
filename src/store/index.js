import Vue from "vue";
import Vuex from "vuex";
import cars from "./modules/cars";
import customers from "./modules/customers";
import dashboard from "./modules/dashboard"
import auth from "./modules/auth";
Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    cars,
    customers,
    dashboard,
    auth
  },
});

export default store;
