// import AuthService from "../../../services/auth.service";
import axios from "axios";
import { API_URL } from "../../../config/dev.env";

/* eslint-disable */

export default {
  // namespaced: true,
  state: {
    users: {},
  },
  actions: {
    async login({ commit }, user) {
      return await axios
        .post(`${API_URL}/login`, {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data.token));
          }
          console.log(response.data);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout({ commit }) {
      localStorage.removeItem("user");

      commit("logout");
    },
  },
  mutations: {
    SET_USER() {},

    LOGOUT_USER() {},

    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
