<template>
  <div>
    <h1>PostProjectNote</h1>
    <button @click="gotoNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "PostRequestNote",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoNext() {
      this.mnx_navToPostRequestReview();
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
