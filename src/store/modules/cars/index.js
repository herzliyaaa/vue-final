import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";

export default {
  state: {
    cars: [],
  },
  getters: {
    carsList: (state) => state.cars,
  },

  actions: {
    async fetchCarsList({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/car`);
      console.log(response.data);
      commit("SET_CARSLIST", response.data);
    },

    //TODO: ADD Car
    async addCar({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/car/add`, {
        serial_number: data.serial_number,
        brand: data.brand,
        model: data.model,
        color: data.color,
        price: data.price,
        year: data.year,
        car_for_sale: data.car_for_sale,
      });
      console.log(response.data);
      commit("ADD_CUSTOMER", response.data);
    },

    //TODO: EDIT Car

    //TODO: DELETE Car

  },

  mutations: {
    SET_CARSLIST(state, cars) {
      state.cars = cars;
    },
    ADD_CUSTOMER(state, data) {
      state.cars.push(data);
    },

    // UPDATE_CUSTOER(state, data) {

    // }
  },
};
