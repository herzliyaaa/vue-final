// import AuthService from "../../../services/auth.service";

/* eslint-disable */

import axios from "axios";
import { API_URL, LOCAL_URL } from "../../../config/dev.env";

export default {
  // namespaced: true,
  state: {
    users: {},
    loggedIn: false
  },
  actions: {
    async login({ commit }, user) {
      const userToken = localStorage.getItem('user')
      return await axios
        .post(`${LOCAL_URL}/login`, {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          console.log(response.data);
          commit("loginSuccess", localStorage.getItem("user"));
          console.log("eyyy" , userToken)
          return response.data;
        })
        .catch((error) => {
          commit("loginFailure", {userToken:null})
          console.log("ERROR ");
          return error.message;
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
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.loggedIn = false;
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
