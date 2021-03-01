<template>
  <div>
    <span>Your username has been updated as.</span><span>{{username}}</span>
    <button class="btn btn-primary mb-3" @click="backToAccount">Continue to Account</button>
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
