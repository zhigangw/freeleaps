<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <slot name="result" />
        <button class="btn btn-primary my-5" @click="backToSubscription">Continue to Subscription</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkProfileUpdated",
  props: {
  },

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToSubscription() {
      this.mnx_navToUserWork();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
