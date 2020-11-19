<template>
  <div>
    <button @click="logout" v-if="isUserAuthenticated">logout</button>
    <button @click="login" v-else>login</button>
  </div>
</template>

<script>
import { BackendApi } from "../../utils/index";

export default {
  name: "Loginout",
  components: {},
  computed: {
    isUserAuthenticated() {
      return this.mnx_isUserAuthenticated();
    },
  },
  methods: {
    login() {
      this.mnx_navToSignin();
    },
    logout() {
      BackendApi.signout(
        this.mnx_getUserIdentity(),
        this.mnx_getUserAuthToken()
      )
        .then((response) => {
          this.mnx_unauthenticatedUser();
          this.mnx_logoutRole();
          this.mnx_navToSignin();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>