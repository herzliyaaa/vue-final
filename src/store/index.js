import Vue from "vue";
import Vuex from "vuex";
import cars from "./modules/cars";
import customers from "./modules/customers";
import dashboard from "./modules/dashboard"
import salesperson from "./modules/salesperson"
import mechanic from "./modules/mechanic"
import auth from "./modules/auth";
import invoice from "./modules/invoice"
import ticket from "./modules/ticket"

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    cars,
    customers,
    dashboard,
    salesperson,
    invoice,
    mechanic,
    ticket,
    auth
  },
});

export default store;
