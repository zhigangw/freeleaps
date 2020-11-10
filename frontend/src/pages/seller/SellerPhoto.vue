<template>
  <div>
    <h1>SellerPhoto</h1>
    <button @click="gotoNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "SellerPhoto",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoNext(){
      this.navToSellerLinkedin();
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
