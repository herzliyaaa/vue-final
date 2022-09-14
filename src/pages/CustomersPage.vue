/* eslint-disable */
<template>
  <b-container fluid>
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Customers" />
        <b-container fluid class="pt-2">
          <b-row class="my-3">
            <!-- whole container-->
            <b-col class="py-2">
              <!-- left container-->
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Add Customers</h4>
                  <b-col class="mt-3">
                    <b-form>
                      <FormInput label="First Name" />
                      <FormInput label="Last Name" />
                      <FormInput label="Phone Number" />
                      <FormInput label="Address" />
                      <b-container
                        class="button-container d-flex justify-content-end"
                      >
                        <b-button class="mr-2" type="reset">Reset</b-button>
                        <b-button variant="success" type="submit"
                          >Save</b-button
                        >
                      </b-container>
                    </b-form>
                  </b-col>
                </b-container>
              </b-col>
            </b-col>
            <b-col md="12" lg="12" xl="9" class="py-2">
              <!-- left container-->
              <b-col class="table-container">
                <b-container class="container-card rounded p-3">
                  <h5 class="px-3 mb-3">Customer Records</h5>
                  <b-table hover :items="listCustomers" :fields="fields">
                    <template v-slot:cell(actions)="{ item }">
                      <span>
                        <b-row class="d-flex justify-content-center">
                          <b-button v-b-modal  @click="showUpdateModal(item.customer_id)">
                            <b-icon
                              class="delete-btn"
                              icon="pencil-square"
                             
                            ></b-icon>
                          </b-button>
                          <!--! Update Modal -->
                          <b-modal id="modal-form" title="Edit">
                            <div>
                              <div class="mb-3">
                                <b-form-group
                                  label="First Name"
                                  id="label"
                                  class="ml-2"
                                >
                                </b-form-group>
                                <b-form-input
                                  placeholder="Enter First Name"
                                  v-model="item.firstname"
                                ></b-form-input>
                              </div>

                              <div class="mb-3">
                                <b-form-group
                                  label="Last Name"
                                  id="label"
                                  class="ml-2"
                                >
                                </b-form-group>
                                <b-form-input
                                  placeholder="Enter Last Name"
                                  v-model="item.lastname"
                                ></b-form-input>
                              </div>
                              <div class="mb-3">
                                <b-form-group
                                  label="Phone Number"
                                  id="label"
                                  class="ml-2"
                                >
                                </b-form-group>
                                <b-form-input
                                  placeholder="Enter Number"
                                  v-model="item.contact"
                                ></b-form-input>
                              </div>

                              <div class="mb-3">
                                <b-form-group
                                  label="Address"
                                  id="label"
                                  class="ml-2"
                                >
                                </b-form-group>
                                <b-form-input
                                  placeholder="Enter Address"
                                  v-model="item.address"
                                ></b-form-input>
                              </div>
                            </div>
                          </b-modal>

                          <b-btn
                            class="mr-2"
                            @click="deleteItem(item.customer_id)"
                          >
                            <b-icon class="edit-btn" icon="trash-fill"></b-icon>
                          </b-btn>
                          <!-- <DeleteModalComponent /> -->
                        </b-row>
                      </span>
                    </template>
                  </b-table>
                  <!-- <b-table hover :items="itemsState" :fields="fields">
                                            <b-button variant="secondary" @click>Archive</b-button>
                                    </b-table> -->
                  <!-- <PaginationComponent /> -->
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
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
import FormInput from "../components/FormInput.vue";
// import DeleteModalComponent from "@/components/DeleteModalComponent.vue";

export default {
  name: "CustomersPage",
  components: {
    SideBar,
    HeaderComponent,
    FormInput,
    // DeleteModalComponent,
  },
  computed: {
    ...mapGetters({ listCustomers: "customersList" }),
  },
  async mounted() {
    return await this.$store.dispatch("fetchCustomersList");
  },
  //     async created() {
  //     //   axios.defaults.headers.common["Authorization"] = localStorage.getItem("user");
  //         const response = await axios.get("/customers", {
  //             headers: {
  //                 Authorization: localStorage.getItem("user")
  //             }
  //         })
  //         console.log(response)
  // },
  props: ["value"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      modalShow: false,
      fields: [
        { key: "customer_id", label: "ID" },
        { key: "firstname", label: "First Name" },
        { key: "lastname", label: "Last Name" },
        { key: "contact", label: "Phone Number" },
        { key: "address", label: "Address" },
        { key: "actions", label: "Actions" },
      ],
      item: {
        customer_id: null,
        firstname: null,
        lastname: null,
        contact: null,
        address: null,
      },
    };
  },
  methods: {
    showUpdateModal(item) {
      console.log("data", this.item);
      this.item = {
        customer_id: item.customer_id,
        firstname: item.firstname,
        lastname: item.lastname,
        contact: item.contact,
        address: item.address,
      };

      this.$bvModal.show("modal-form");
    },
    
    // async editItem(item) {
    //   this.$bvModal.hide("update-job");

    // },

    async deleteItem(customer_id) {
      try {
        console.log(customer_id);
        await this.$store.dispatch("deleteCustomer", customer_id);
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },

  // async beforeCreate() {
  //     await this.$store.dispatch("allCustomers").then(res => console.log(res));
  // },
};
</script>

<style scoped>
nav {
  padding: 10px;
}

div.py-2 {
  padding: 0 !important;
}

.edit-btn,
.delete-btn {
  color: #fff;
}
</style>
