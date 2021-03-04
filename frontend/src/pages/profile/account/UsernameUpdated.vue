<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout text-center">Your username has been updated as <span class="fw-bold"> {{username}}</span></p>
        <button class="btn btn-primary my-5" @click="backToAccount">Continue to Account</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsernameUpdated",
  props: {
    username: {
      required: true,
      type: String,
    },
  },

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToAccount() {
      this.mnx_navToUserAccount();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
