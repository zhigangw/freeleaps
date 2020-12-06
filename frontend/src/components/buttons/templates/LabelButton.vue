<template>
  <div>
    <label>{{name}}</label>
    <button v-bind="$attrs">{{value}}</button>
  </div>
</template>

<script>
export default {
  name: "LabelButton",
  props: {
    name: null,
    value: null,
  },

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
