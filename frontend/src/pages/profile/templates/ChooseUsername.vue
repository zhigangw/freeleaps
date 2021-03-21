<template>
  <div class="main-body">
    <div class="story-board">
        <slot name="title" />
      <div class="focus-area">
        <slot name="callout" />
        <button class="btn btn-primary my-5" @click="gotoUpdateUsername">Choose Username</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseUsername",
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
      this.mnx_navToUpdateName();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
