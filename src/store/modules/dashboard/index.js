import axios from "axios";
const API_URL = "http://172.16.4.182:4000"

export default {
  state: {
    topSellers: [],
  },
  getters: {
    topSellersList: (state) => state.topSellers,
  },

  actions: {
    async fetchTopSellersList({ commit }) {
      const response = await axios.get(`${API_URL}/top-sellers`);
      console.log(response.data)
      commit("SET_TOPSELLERS_LIST", response.data);
    },
  },

  mutations: {
    SET_TOPSELLERS_LIST(state, topSellers) {
      state.topSellers = topSellers;
    },
  },
};

