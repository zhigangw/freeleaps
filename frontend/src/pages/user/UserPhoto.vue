<template>
  <div>
    <h1>UserPhoto</h1>
    <button @click="gotoNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "UserPhoto",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoNext(){
      this.$router.push("/user-linkedin");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
