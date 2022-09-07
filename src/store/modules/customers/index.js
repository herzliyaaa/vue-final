import axios from "axios";
import { API_URL } from "../../../config/dev.env";
// const API_URL = "http://172.16.4.182:4000"

export default {
  state: {
    customers: [],
  },
  getters: {
    customersList: (state) => state.customers,
  },

  actions: {
    async fetchCustomersList({ commit }, token) {
      const response = await axios.get(`${API_URL}/customers`, {
        headers: {
          Authorization: localStorage.getItem(token),
        },
      });

      console.log(response.data);
      commit("SET_CUSTOMERSLIST", response.data);
    },
  },

  mutations: {
    SET_CUSTOMERSLIST(state, customers) {
      state.customers = customers;
    },
  },
};
