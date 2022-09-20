<template>
  <b-container fluid>
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Service" />
        <b-container fluid class="pt-2">
          <b-row class="my-3">
            <!-- whole container-->
            <b-col xl="3" class="py-2">
              <!-- left container-->
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Add Service Ticket</h4>
                  <b-col class="mt-3">
                    <b-form>
                      <div class="mb-3">
                        <b-form-group label="Car" id="car" class="ml-2">
                        </b-form-group>
                        <b-form-select v-model="ticket.car_id">
                          <option :value="null" disabled>
                            -- Please select an option --
                          </option>
                          <option
                            v-for="car in listCars"
                            :key="car.car_id"
                            :value="car.car_id"
                          >
                            {{ car.brand }}-{{ car.model }}
                          </option>
                        </b-form-select>
                      </div>

                      <div class="mb-3">
                        <b-form-group
                          label="Customer"
                          id="customer"
                          class="ml-2"
                        >
                        </b-form-group>
                        <b-form-select v-model="ticket.customer_id">
                          <option :value="null" disabled>
                            -- Please select an option --
                          </option>
                          <option
                            v-for="customer in listCustomers"
                            :key="customer.customer_id"
                            :value="customer.customer_id"
                          >
                            {{ customer.firstname }} {{ customer.lastname }}
                          </option>
                        </b-form-select>
                      </div>

                      <div class="mb-3">
                        <b-form-group
                          label="Mechanic"
                          id="mechanic"
                          class="ml-2"
                        >
                        </b-form-group>
                        <b-form-select v-model="ticket.mechanic_id">
                          <option :value="null" disabled>
                            -- Please select an option --
                          </option>
                          <option
                            v-for="mechanic in listMechanics"
                            :key="mechanic.mechanic_id"
                            :value="mechanic.mechanic_id"
                          >
                            {{ mechanic.firstname }} {{ mechanic.lastname }}
                          </option>
                        </b-form-select>
                      </div>

                      <div class="mb-3">
                        <label for="datepicker" class="ml-2 mb-2"
                          >Date Received</label
                        >
                        <b-form-datepicker
                          id="datepicker-received"
                          v-model="ticket.date_received"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                          }"
                        >
                        </b-form-datepicker>
                      </div>

                      <div class="mb-3">
                        <label for="datepicker" class="ml-2 mb-2"
                          >Date Returned</label
                        >
                        <b-form-datepicker
                          id="datepicker-returned"
                          v-model="ticket.date_returned"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                          }"
                        >
                        </b-form-datepicker>
                      </div>

                      <div class="mb-3">
                        <b-form-group label="Comment" id="label" class="ml-2">
                        </b-form-group>
                        <b-form-textarea
                          id="textarea"
                          placeholder="Enter comments here"
                          v-model="ticket.comments"
                        >
                        </b-form-textarea>
                      </div>

                      <b-container
                        class="button-container d-flex justify-content-end"
                      >
                        <b-button class="mr-2" type="reset">Reset</b-button>
                        <b-button variant="success" type="submit" @click="createTicket"
                           >Save</b-button
                        >
                      </b-container>
                    </b-form>
                  </b-col>
                </b-container>
              </b-col>
            </b-col>
            <b-col cmd="12" lg="12" xl="9" class="table-container py-2">
              <!-- left container-->
              <b-col class="table-container">
                <b-container class="container-card rounded p-3">
                  <h5 class="px-3 mb-3">Service Ticket Records</h5>
                  <b-table hover :items="listTickets" :fields="fields">
                    <template v-slot:cell(actions)="{ item }">
                      <span>
                        <b-row class="d-flex justify-content-center">
                          <b-btn class="mr-2" @click="editItem(item)">
                            <b-icon
                              class="edit-btn"
                              icon="pencil-square"
                            ></b-icon>
                          </b-btn>
                          <ModalComponent />
                        </b-row>
                      </span>
                    </template>
                  </b-table>
                  <PaginationComponent />
                </b-container>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
import ModalComponent from "@/components/DeleteModalComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "ServiceTicketPage",
  components: {
    SideBar,
    HeaderComponent,
    ModalComponent,
    PaginationComponent,
  },
  computed: {
    ...mapGetters({
      listCustomers: "customersList",
      listCars: "carsList",
      listMechanics: "mechanicsList",
      listTickets: "ticketsList",
    }),
  },
  async mounted() {
    await this.$store.dispatch("fetchCarsList");
    await this.$store.dispatch("fetchMechanicsList");
    await this.$store.dispatch("fetchCustomersList");
    await this.$store.dispatch("fetchTicketList");
  },
  data() {
    return {
      ticket: {
        car_id: null,
        customer_id: null,
        mechanic_id: null,
        date_returned: null,
        date_received: null,
        comments: null,
      },

      fields: [
        { key: "service_ticket_number", label: "Ticket Number"},
        { key: "mechanic_name", label: "Mechanic Name" },
        { key: "customer_name", label: "Customer Name" },
        { key: "serial_number", label: "Car Serial Number" },
        {
          key: "date_returned",
          label: "Date Returned",
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY, h:mm A");
          },
        },
        {
          key: "date_received",
          label: "Date Received",
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY, h:mm A");
          },
        },
        { key: "comments", label: "Comment" },
      ],
    };
  },

  methods: {
    async createTicket(){
      await this.$store.dispatch("createTicket", this.ticket);
      location.reload();
    }
  }
};
</script>

<style scoped>
nav {
  padding: 10px;
}

div.py-2 {
  padding: 0 !important;
}
</style>
