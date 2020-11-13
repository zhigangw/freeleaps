<template>
  <div>
    <button @click="switchToBuyer" v-if="isSeller">Switch to buyer</button>
    <button @click="switchToSeller" v-else-if="isBuyer">Switch to seller</button>
  </div>
</template>

<script>
export default {
  name: "Loginout",
  components: {},
  computed: {
    isBuyer() {
      return this.mnx_isUserBuyer();
    },
    isSeller() {
      return this.mnx_isUserSeller();
    },
  },
  methods: {
    switchToBuyer() {
      if (this.mnx_isUserAuthenticated()) {
        //TODO fetch the profile from backend
        this.mnx_setUserBuyer();
        this.mnx_navToBuyerDashboard();
      }
    },
    switchToSeller() {
      if (this.mnx_isUserAuthenticated()) {
        //TODO fetch the profile from backend
        this.mnx_setUserSeller();
        this.mnx_navToSellerDashboard();
      }
    },
  },
};
</script>

<style scoped>
</style>