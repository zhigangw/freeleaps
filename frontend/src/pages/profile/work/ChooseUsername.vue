<template>
  <choose-username class="focus-area">
    <template #callout>
      <p
        class="callout text-center"
      >Choose a username first. It will be the identity for using freeleaps services and subscriptions</p>
    </template>
  </choose-username>
</template>

<script>
import ChooseUsername from "../templates/ChooseUsername";

export default {
  name: "ChooseUsername",
  props: {},

  data() {
    return {};
  },

  components: {
    ChooseUsername,
  },

  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
