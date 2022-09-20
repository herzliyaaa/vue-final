import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";

export default {
  state: {
    tickets: [],
  },
  getters: {
    ticketsList: (state) => state.tickets,
  },

  actions: {
    async fetchTicketList({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/ticket`);
      console.log(response.data);
      commit("SET_TICKETLIST", response.data);
    },

    async createTicket({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/ticket/create`, {
        mechanic_id: data.mechanic_id,
        customer_id: data.customer_id,
        car_id: data.car_id,
        date_received: data.date_received,
        date_returned: data.date_returned,
        comments: data.comments,
      });
      console.log(response.data);
      commit("ADD_TICKET", response.data);
    },
  },

  mutations: {
    SET_TICKETLIST(state, tickets) {
      state.tickets = tickets;
    },
    ADD_TICKET(state, data) {
      state.tickets.push(data);
    },
  },
};
