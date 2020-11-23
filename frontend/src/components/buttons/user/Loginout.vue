<template>
  <div>
    <button @click="signout" v-if="isUserAuthenticated">logout</button>
    <button @click="signin" v-else>login</button>
  </div>
</template>

<script>
import { BackendApi } from "../../../utils/index";

export default {
  name: "Loginout",
  components: {},
  computed: {
    isUserAuthenticated() {
      return this.mnx_isUserAuthenticated();
    },
  },
  methods: {
    logout(response, error) {
      console.log(response);
      console.log(error);
      this.mnx_unauthenticatedUser();
      this.mnx_logoutRole();
      this.mnx_navToSignin();
    },
    signin() {
      this.mnx_navToSignin();
    },
    signout() {
      BackendApi.signout(
        this.mnx_getUserIdentity(),
        this.mnx_getUserAuthToken()
      )
        .then((response) => {
          this.logout(response, null);
        })
        .catch((error) => {
          // continue to logout with errors
          this.logout(null, error);
        });
    },
  },
};
</script>

<style scoped>
</style>