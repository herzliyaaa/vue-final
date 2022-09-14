import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env"

export default {
  state: {
    salespersonList: [],
  },
  getters: {
    getSalespersonList: (state) => state.mechanics,
  },

  actions: {
    async fetchMechanicsList({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/salesperson`);
      console.log(response.data);
      commit("SET_SALESPERSONLIST", response.data);
    },
  },

  mutations: {
    SET_MECHANICLIST(state, salespersonList) {
      state.salespersonList = salespersonList;
    },
  },
};
