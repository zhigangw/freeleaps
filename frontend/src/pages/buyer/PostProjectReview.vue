<template>
  <div>
    <h1>PostProjectReview</h1>
    <button @click="postProject">Post</button>
  </div>
</template>

<script>
export default {
  name: "PostProjectReview",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    postProject() {
      this.mnx_navToBuyerDashboard();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
