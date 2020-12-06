<template>
  <div>
    <label>Name:</label>
    <button v-bind="$attrs">{{username}}</button>
  </div>
</template>

<script>
export default {
  name: "Username",
  props: {
    username: null,
  },

  data() {
    return {};
  },

  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
