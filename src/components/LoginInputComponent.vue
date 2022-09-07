<template>
  <div class="mb-3">
    <div class="mt-3 d-flex justify-content-center">
      <b-form class="d-flex flex-column">
        <!-- <b-form class="d-flex flex-column" action="" @submit="login()">
                          <LoginInputComponent v-model="id_number" label="ID Number" type="text" placeholder="Enter ID Number" />
                          <LoginInputComponent v-model="password" label="Password" type="password" placeholder="Enter Password" />         
                </b-form> -->
        <!-- <LoginInputComponent
                    label="ID Number"
                    value="email"
                    name="email"
                    type="text"
                    placeholder="Enter ID Number"
                  />
                  <LoginInputComponent
                    label="Password"
                    type="password"
                    name="password"
                    value="password"
                    placeholder="Enter Password"
                  /> -->

        <input
          label="ID Number"
          v-model="email"
          name="email"
          type="text"
          placeholder="Enter ID Number"
        />
        <input
          label="Password"
          type="password"
          name="password"
          v-model="password"
          placeholder="Enter Password"
        />

        <br />
        <div class="d-flex justify-content-center">
          <button
            type="button"
            @click="handleLogin"
            class="col-6 btn btn-block"
          >
            LOG IN
          </button>
        </div>
      </b-form>
      <!-- <div class="d-flex justify-content-center">
                  <button @click="handleLogin" class="col-12 btn btn-block">
                    LOG IN
                  </button>
                </div> -->
    </div>
  </div>
</template>

<script>
// export default {
//     name: "LoginInputComponent",
//     props: {
//         label: {
//             type: String
//         },
//         type: {
//             type: String
//         },
//         placeholder: {
//             type: String
//         },
//         value: {
//             type: String
//         },
//         name: {
//             type: String
//         }
//     }
// }
export default {
  name: "LogIn",
  // components: {
  //   LoginInputComponent,
  // },
  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  // created() {
  //   if (this.loggedIn) {
  //     this.$router.push("/dashboard");
  //   }
  // },
  methods: {
    async handleLogin() {
      const user = { email: this.email, password: this.password };

      this.$store.dispatch("login", user).then(
        () => {
          if (user.email && user.password) {
            this.$router.push("/customers");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
.form-control,
.form-control:focus {
  background-color: #829bb8;
  color: white;
  border-radius: 7px;
  font-size: 18px;
  outline: none !important;
  width: 350px;
}

.form-control::placeholder {
  color: rgb(238, 238, 238, 0.6);
}

.form-label {
  font-size: 18px;
  font-weight: 600;
  align-items: center;
}
body {
  height: 100vh;
  background-image: url(../assets/img/background.svg);
  overflow: hidden;
}

#header {
  transition: all 0.5s;
  z-index: 997;
  padding-top: 20px;
}

@media (max-width: 768px) {
  #header {
    padding-top: 10px;
  }
}

.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
  transition: 0.3s;
}

@media (max-width: 1080px) {
  .navbar a,
  .navbar a:focus {
    color: var(--primary-color);
  }

  .navbar a:hover {
    color: aqua;
  }
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: var(--primary-color);
}

.navbar .active {
  font-weight: 800;
}

.navbar .active:hover {
  font-weight: 800;
  color: #fff;
}

.lou-geh {
  height: 250px;
  width: 250px;
}

@media (max-width: 768px) {
  .lou-geh {
    height: 200px;
    width: 200px;
  }
}

.car {
  height: 75%;
}

@media (max-width: 768px) {
  .car {
    width: 70%;
  }
}

.right {
  padding-top: 20px;
}

@media (min-width: 900px) {
  .right {
    padding-left: 100px;
  }
}

.btn {
  background-color: var(--secondary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  padding: 8px;
}

.btn:hover {
  background-color: var(--primary-color);
  color: #fff;
}
</style>
