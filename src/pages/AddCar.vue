<template>
  <b-container fluid id="hero">
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Add Car" />
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <!-- whole container-->
            <b-col xl="6" class="py-2">
              <!-- left container-->
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Add Car</h4>
                  <b-row>
                    <b-col cols="6" class="mt-3">
                      <!-- <FormInput
                        label="Serial Number"
                        :value="car.serial_number"
                      />
                      <FormInput label="Model" :value="car.model" />
                      <FormInput label="Year" :value="car.year" />
                      <FormInput label="Price" :value="car.price" /> -->
                      <!-- @serial_number -->
                      <div class="mb-3">
                        <b-form-group
                          label="Serial Number"
                          id="label"
                          class="ml-2"
                        >
                        </b-form-group>
                        <b-form-input
                          placeholder="Enter Serial Number"
                          v-model="car.serial_number"
                        ></b-form-input>
                      </div>

                      <!-- @model -->
                      <div class="mb-3">
                        <b-form-group label="Model" id="label" class="ml-2">
                        </b-form-group>
                        <b-form-input
                          placeholder="Enter Model"
                          v-model="car.model"
                        ></b-form-input>
                      </div>

                      <!-- @year -->
                      <div class="mb-3">
                        <b-form-group label="Year" id="label" class="ml-2">
                        </b-form-group>
                        <b-form-input
                          placeholder="Enter Year"
                          v-model="car.year"
                        ></b-form-input>
                      </div>
                    </b-col>

                    <b-col cols="6" class="mt-3">
                      <!-- @price -->
                      <div class="mb-3">
                        <b-form-group label="Price" id="label" class="ml-2">
                        </b-form-group>
                        <b-form-input
                          placeholder="Enter Price"
                          v-model="car.price"
                        ></b-form-input>
                      </div>

                      <!-- @brand -->
                      <div class="mb-3">
                        <b-form-group label="Brand" id="label" class="ml-2">
                        </b-form-group>
                        <b-form-input
                          placeholder="Enter Brand"
                          v-model="car.brand"
                        ></b-form-input>
                      </div>

                      <!-- @color -->
                      <div class="mb-3">
                        <b-form-group label="Color" id="label" class="ml-2">
                        </b-form-group>
                        <b-form-input
                          placeholder="Enter Color"
                          v-model="car.color"
                        ></b-form-input>
                      </div>
                      <!-- <FormInput label="Brand" :value="car.brand" />
                      <FormInput label="Color" :value="car.color" /> -->

                      <!-- <RadioComponent class="mt-4" :selectValue="car.car_for_sale" :selectValueOption="car.car_for_sale"/> -->
                      <!-- @car_for_sale -->
                      <div class="mb-3">
                        <b-form-group
                          label="For Sale?"
                          class="ml-2"
                          v-slot="{ ariaDescribedby }"
                        >
                          <b-row class="d-flex">
                            <b-form-radio
                              v-model="car.car_for_sale"
                              :aria-describedby="ariaDescribedby"
                              value="Yes"
                              >Yes
                            </b-form-radio>
                            <b-form-radio
                              class="ml-3"
                              v-model="car.car_for_sale"
                              :aria-describedby="ariaDescribedby"
                              value="No"
                              >No
                            </b-form-radio>
                          </b-row>
                        </b-form-group>
                      </div>
                      <b-container
                        class="button-container d-flex justify-content-end">
                        <b-button class="mr-2" type="reset">Reset</b-button>
                        <b-button
                          variant="success"
                          type="submit"
                          @click="addCar"
                          >Save</b-button
                        >
                      </b-container>
                    </b-col>
                  </b-row>
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
// import FormInput from "../components/FormInput.vue";
// import RadioComponent from "../components/RadioComponent.vue";

export default {
  name: "AddCar",
  components: {
    SideBar,
    HeaderComponent,
    // FormInput,
    // RadioComponent,
  },
  data() {
    return {
      car: {
        serial_number: null,
        brand: null,
        model: null,
        price: null,
        year: null,
        color: null,
        car_for_sale: null,
      },
    };
  },

  methods: {
    async addCar() {
      await this.$store.dispatch("addCar", this.car);
      this.$router.push("/cars");
      alert("Added car successfully!");
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
