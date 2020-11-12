<template>
  <div>
    <button @click="logout" v-if="isUserAuthenticated">logout</button>
    <button @click="login" v-else>login</button>
  </div>
</template>

<script>

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
      this.mnx_unauthenticatedUser();
      this.mnx_logoutRole();
      this.mnx_navToSignin();
    },
  },
};
</script>

<style scoped>
</style>