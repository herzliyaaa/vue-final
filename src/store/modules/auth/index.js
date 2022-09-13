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
      return await axios
        .post(`${LOCAL_URL}/login`, {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
       
          }  
          commit("loginSuccess", localStorage.getItem("user"));
          return response.data;
        })
        .catch((error) => {
          commit("loginFailure", {userToken:null})
          console.log("Incomplete credentials!", error.message);
          return error.message;
        });
    },
    logout({ commit }) {
      localStorage.removeItem("user");
      commit("logout");
    },
  },
  mutations: {


    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
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
