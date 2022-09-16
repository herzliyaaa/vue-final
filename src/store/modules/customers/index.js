import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";
// const API_URL = "http://172.16.4.182:4000"

export default {
  state: {
    customers: [],
  },
  getters: {
    customersList: (state) => state.customers,
  },

  actions: {
    async fetchCustomersList({ commit }) {
      await axios
        .get(`${LOCAL_URL}/customers`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.customers = response.data;
          commit("SET_CUSTOMERSLIST", response.data);
        });
    },

    async editCustomer({ commit }, customer) {
      await axios
        .put(`${LOCAL_URL}/customers/edit/${customer.customer_id}`, {
          firstname: customer.firstname,
          lastname: customer.lastname,
          contact: customer.contact,
          address: customer.address,
        })
        .then((response) => {
          commit("UPDATE_CUSTOMER", response.data);
          console.log(response.data);
          return response;
        });
    },

    async deleteCustomer({ commit }, customer_id) {
      const response = await axios.patch(
        `${LOCAL_URL}/customers/delete/${customer_id}`
      );
      console.log(localStorage.getItem("token"));
      commit("DELETE_CUSTOMER", response.data);
      console.log(response.data);
    },
  },

  mutations: {
    SET_CUSTOMERSLIST(state, customers) {
      state.customers = customers;
    },
    DELETE_CUSTOMER(state, customer_id) {
      let index = state.customers.findIndex(
        (customer) => customer.customer_id == customer_id
      );
      console.log(index);
      state.customers.splice(index, 0);
    },

    UPDATE_CUSTOMER(state, data) {
      let index = state.customers.map((val, ind) => {
        if (val.id == data.id) {
          return ind;
        }
      });
      let ind = index.filter((item) => item != undefined);
      state.customers[ind] = data;
    },
  },
};
