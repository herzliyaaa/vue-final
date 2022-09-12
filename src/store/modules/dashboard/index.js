import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    topSellers: [],
    monthlySales: {},
    monthlyRevenue: {},
    monthlyCustomers: {},
  },
  getters: {
    topSellersList: (state) => state.topSellers,
    monthlySalesRecord: (state) => state.monthlySales,
    monthlyRevenueRecord: (state) => state.monthlyRevenue,
    monthlyCustomersRecord: (state) => state.monthlyCustomers,
  },

  actions: {
    async fetchTopSellersList({ commit }) {
      const response = await axios.get(`${API_URL}/top-sellers`);
      console.log(response.data);
      commit("SET_TOPSELLERS_LIST", response.data);
    },

    async fetchMonthlySales({ commit }) {
      const response = await axios.get(`${API_URL}/sales-number`);
      console.log(response.data[0].count);
      commit("SET_MONTHLY_SALES_LIST", response.data[0].count);
    },
    async fetchMonthlyRevenue({ commit }) {
      const response = await axios.get(`${API_URL}/monthly-revenue`);
      console.log(response.data);
      commit("SET_MONTHLY_REVENUE_LIST", response.data[0].month_revenue);
    },
    async fetchMonthlyCustomer({ commit }) {
      const response = await axios.get(`${API_URL}/customers-count`);
      console.log(response.data);
      commit("SET_MONTHLY_CUSTOMERS_LIST", response.data[0].count);
    },
  },

  mutations: {
    SET_TOPSELLERS_LIST(state, topSellers) {
      state.topSellers = topSellers;
    },

    SET_MONTHLY_SALES_LIST(state, monthlySales) {
      state.monthlySales = monthlySales;
    },
    SET_MONTHLY_REVENUE_LIST(state, monthlyRevenue) {
      state.monthlyRevenue = monthlyRevenue;
    },
    SET_MONTHLY_CUSTOMERS_LIST(state, monthlyCustomers) {
      state.monthlyCustomers = monthlyCustomers;
    },
  },
};
