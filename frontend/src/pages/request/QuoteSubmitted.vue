<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
      <p class="callout text-center">
        Your quote has been submitted.
      </p>
        <button class="btn btn-primary my-5" @click="backToBrowseRequests">Continue to browse rquests</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteSubmitted",
  props: {
  },

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToBrowseRequests() {
      this.mnx_navToRequests();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
