import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";

export default {
  state: {
    invoice: [],
  },
  getters: {
    invoiceList: (state) => state.invoice,
  },

  actions: {
    async fetchInvoiceList({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/invoice`);
      console.log(response.data);
      commit("SET_INVOICELIST", response.data);
    },

    async createInvoice({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/invoice/create`, {
        salesperson_id: data.salesperson_id,
        customer_id: data.customer_id,
        car_id: data.car_id,
      });
      console.log(response.data);
      commit("ADD_INVOICE", response.data);
    },
  },

  mutations: {
    SET_INVOICELIST(state, invoice) {
      state.invoice = invoice;
    },
    ADD_INVOICE(state, data) {
      state.invoice.push(data);
    },
  },
};
