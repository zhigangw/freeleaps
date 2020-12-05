<template>
  <div>
    <button @click="signup" v-if="!isUserAuthenticated">Sign up</button>
  </div>
</template>

<script>

export default {
  name: "Signup",
  components: {},
  computed: {
    isUserAuthenticated() {
      return this.mnx_isUserAuthenticated();
    },
  },
  methods: {
    signup() {
      this.mnx_navToFrontDoor();
    },
  },
};
</script>

<style scoped>
</style>