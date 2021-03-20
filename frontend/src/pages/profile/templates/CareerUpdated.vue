<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <slot name="result" />
        <button class="btn btn-primary my-5" @click="backToCareer">Continue to Career</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerProfileUpdated",
  props: {
  },

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToCareer() {
      this.mnx_navToUserCareer();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
