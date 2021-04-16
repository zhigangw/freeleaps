<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <slot name="result" />
      </div>
      <button class="btn btn-primary my-5" @click="backToProject">Continue to Project</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectUpdatedTemplate",
  props: {},

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToProject() {
      this.mnx_navToViewProject();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
