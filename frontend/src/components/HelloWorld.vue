<template>
  <div class="hello">
    <h1>{{ hello_json }}</h1>
  </div>
</template>

<script>
import covidhubAxios from "./axios-ins";

export default {
  name: "HelloWorld",
  props: {},

  data() {
    return {
      hello_json: null,
    };
  },

  created() {},
  mounted() {
    this.getHello();
  },
  methods: {
    getHello() {
      covidhubAxios
        .get("/api/hello")
        .then((response) => (this.hello_json = response.data))
        .catch((error) => console.log(error));
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
