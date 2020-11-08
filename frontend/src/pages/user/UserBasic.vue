<template>
  <div>
    <h1>UserBasic</h1>
    <button @click="gotoNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "UserBasic",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoNext(){
      this.$router.push("/user-photo");
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
