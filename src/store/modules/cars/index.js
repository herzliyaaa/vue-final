import axios from "axios";
import {API_URL} from "../../../config/dev.env"

export default {
  state: {
    cars: [],
  },
  getters: {
    carsList: (state) => state.cars,
  },

  actions: {
    async fetchCarsList({ commit }) {
      const response = await axios.get(`${API_URL}/cars`);
      console.log(response.data);
      commit("SET_CARSLIST", response.data);
    },
  },

  mutations: {
    SET_CARSLIST(state, cars) {
      state.cars = cars;
    },
  },
};
