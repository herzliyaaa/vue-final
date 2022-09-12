<template>
  <div>
    <b-container
      fluid
      class="header-nav pt-3 justify-content-between d-xl-flex"
    >
      <b-col
        sm="12"
        xl="2"
        class="d-flex align-items-center justify-content-sm-center justify-content-xl-start"
      >
        <div class="d-flex align-items-center">
          <h2>{{ title }}</h2>
        </div>
      </b-col>
      <b-col
        sm="12"
        xl="10"
        class="search-container d-flex justify-content-sm-center justify-content-xl-end"
      >
        <b-nav-form class="mr-3">
          <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button
            variant="outline-light"
            class="my-sm-0 btn d-flex"
            type="submit"
            ><b-icon icon="search"></b-icon
          ></b-button>
        </b-nav-form>
        <div>
          <b-avatar variant="secondary"></b-avatar>
          <b-dropdown
            :text="currentUser.email"
            variant="secondary"
            class="user-dropdown m-2"
          >
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-container>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem("user")),
    };
  },

  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.btn {
  border: solid 1px var(--secondary-color);
  color: var(--primary-color);
}

.btn:hover,
.btn:focus {
  background-color: var(--primary-color) !important;
  color: white !important;
  outline: none !important;
}

nav {
  padding: 0px 25px 10px 25px;
}

.breadcrumb {
  background-color: var(--background-color);
}

.user-dropdown {
  outline: var(--secondary-color) !important;
}

h2 {
  color: var(--primary-color);
}

.badge-secondary {
  background-color: var(--primary-color);
}

.search-container {
  padding-right: 5px !important;
}
</style>
