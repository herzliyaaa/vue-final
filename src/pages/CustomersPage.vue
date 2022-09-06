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
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>
                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="9" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container ">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Customer Records</h5>
                                    <b-table hover :items="listCustomers" :fields="fields">
                                        <template v-slot:cell(actions)="{ item }">
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <b-btn class="mr-2" @click="editItem(item)">
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                    </b-btn>
                                                    <DeleteModalComponent />
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
import { mapGetters } from 'vuex'
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import FormInput from "../components/FormInput.vue"
import DeleteModalComponent from "@/components/DeleteModalComponent.vue"

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput,
        DeleteModalComponent,
    },
    computed: {
        ...mapGetters({ listCustomers: "customersList" }),
    },
    async mounted() {
        return await this.$store.dispatch("fetchCustomersList");
    },
    props: ["value"],
    model: {
        prop: "value",
        event: "update"
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
                { key: "actions", label: "Actions" }
            ],
            items: {
                ID: null,
                first_name: null,
                last_name: null,
                phone_number: null,
                address: null
            }
        }
    },
    // async beforeCreate() {
    //     await this.$store.dispatch("allCustomers").then(res => console.log(res));
    // },
}
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