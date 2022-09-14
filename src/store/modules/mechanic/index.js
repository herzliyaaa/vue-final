import axios from "axios";
import { API_URL } from "../../../config/dev.env"

export default {
  state: {
    mechanics: [],
  },
  getters: {
    mechanicsList: (state) => state.mechanics,
  },

  actions: {
    async fetchMechanicsList({ commit }) {
      const response = await axios.get(`${API_URL}/mechanic`);
      console.log(response.data);
      commit("SET_MECHANICSLIST", response.data);
    },
  },

  mutations: {
    SET_MECHANICLIST(state, mechanics) {
      state.mechanics = mechanics;
    },
  },
};
