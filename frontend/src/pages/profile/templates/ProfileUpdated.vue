<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <slot name="result" />
        <button class="btn btn-primary my-5" @click="backToPersonal">Continue to Personal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUpdated",
  props: {
  },

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToPersonal() {
      this.mnx_navToUserPersonal();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
