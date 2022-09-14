<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Cars" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex justify-content-end px-3">
                        <router-link to="/add-car" class="btn btn-success" exact>Add Car</router-link>
                    </b-row>
                    <b-row class="d-flex justify-content-center my-3">
                        <b-col md="12" lg="12" xl="12" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container fluid class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Car Records</h5>
                                    <b-table hover :items="listCars" :fields="fields">
                                        <template v-slot:cell(actions)="{ item }">
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <b-btn class="mr-2" @click="editItem(item)">
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
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
import { mapGetters } from 'vuex'
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import ModalComponent from "@/components/DeleteModalComponent.vue"
import PaginationComponent from "../components/PaginationComponent.vue"

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
        ModalComponent,
        PaginationComponent
    },
    computed: {
        ...mapGetters({ listCars: "carsList" }),

    },
    async mounted() {
        return await this.$store.dispatch("fetchCarsList");
    },
    data() {
        return {
            value: '',
            fields: [
                { key: "serial_number", label: "Serial Number" },
                { key: "brand", label: "Brand" },
                { key: "model", label: "Model" },
                { key: "color", label: "Color" },
                { key: "year", label: "Year" },
                { key: "price", label: "Price" },
                { key: "actions", label: "Actions" },
            ],
            // items: [
            //     { ID: 1, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' }
            // ]
        }
    }
}
</script>

<style scoped>
nav {
    padding: 10px;
}

div.py-2 {
    padding: 0 !important;
}

.btn {
    background-color: var(--primary-color) !important;
}

.btn:hover {
    background-color: var(--secondary-color) !important;
}
</style>