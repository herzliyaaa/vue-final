<template>
  <b-container fluid>
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Invoice" />
        <b-container fluid class="pt-2">
          <b-row class="my-3">
            <!-- whole container-->
            <b-col class="py-2">
              <!-- left container-->
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Add Invoice</h4>
                  <b-col class="mt-3">
                    <!-- <b-form @submit.prevent="onSubmit"> -->
                    <div class="mb-3">
                      <label for="datepicker" class="ml-2 mb-2"
                        >Invoice Date</label
                      >
                      <b-form-datepicker
                        id="datepicker"
                        v-model="newDate"
                        :date-format-options="{
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit',
                        }"
                        disabled
                      >
                      </b-form-datepicker>
                    </div>

                    <!-- @select dropdown for salesperson -->
                    <div class="mb-3">
                      <b-form-group
                        label="Salesperson"
                        id="salesperson"
                        class="ml-2"
                      >
                      </b-form-group>
                      <b-form-select v-model="invoice.salesperson_id">
                        <option :value="null" disabled>
                          -- Please select an option --
                        </option>
                        <option
                          v-for="salesperson in listSalesperson"
                          :key="salesperson.salesperson_id"
                          :value="salesperson.salesperson_id"
                        >
                          {{ salesperson.firstname }}
                          {{ salesperson.lastname }}
                        </option>
                      </b-form-select>
                    </div>

                    <!-- @select dropdown for customer -->
                    <div class="mb-3">
                      <b-form-group label="Customer" id="customer" class="ml-2">
                      </b-form-group>
                      <b-form-select v-model="invoice.customer_id">
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

                    <!-- @select dropdown for cars -->
                    <div class="mb-3">
                      <b-form-group label="Car" id="car" class="ml-2">
                      </b-form-group>
                      <b-form-select v-model="invoice.car_id">
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

                    <b-container
                      class="button-container d-flex justify-content-end"
                    >
                      <b-button class="mr-2" type="reset">Reset</b-button>
                      <b-button
                        variant="success"
                        type="submit"
                        @click="addInvoice"
                        >Save</b-button
                      >
                    </b-container>
                    <!-- </b-form> -->
                  </b-col>
                </b-container>
              </b-col>
            </b-col>
            <b-col md="12" lg="12" xl="9" class="py-2">
              <!-- left container-->
              <b-col class="table-container">
                <b-container class="container-card rounded p-3">
                  <h5 class="px-3 mb-3">Invoice Records</h5>
                  <b-table hover :items="invoiceList" :fields="fields">
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
import { mapGetters } from "vuex";
import moment from "moment";
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

export default {
  name: "InvoicePage",
  components: {
    SideBar,
    HeaderComponent,
    PaginationComponent,
  },
  computed: {
    ...mapGetters({
      listCustomers: "customersList",
      listCars: "carsList",
      listSalesperson: "getSalespersonList",
      invoiceList: "invoiceList",
    }),
  },
  async mounted() {
    await this.$store.dispatch("fetchCarsList");
    await this.$store.dispatch("fetchInvoiceList");
    await this.$store.dispatch("fetchCustomersList");
    await this.$store.dispatch("fetchSalespersonList");
  },
  data() {
    return {
      invoice: {
        salesperson_id: null,
        customer_id: null,
        car_id: null,
      },

      newDate: new Date(),
      value: "",
      fields: [
        { key: "invoice_number", label: "Invoice Number" },
        {
          key: "transaction_date",
          label: "Invoice Date",
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY, h:mm A");
          },
        },
        { key: "salesperson_name", label: "Salesperson Name" },
        { key: "customer_name", label: "Customer Name" },
        { key: "serial_number", label: "Serial Number" },
      ],
    };
  },

  methods: {
    async addInvoice() {
      await this.$store.dispatch("createInvoice", this.invoice);
      location.reload();
    },
  },
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
