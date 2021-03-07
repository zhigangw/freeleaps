<template>
  <personal-updated class="focus-area">
    <template #result>
      <p class="callout text-center">Your photo has been updated</p>
    </template>
  </personal-updated>
</template>

<script>
import PersonalUpdated from "../templates/PersonalUpdated";
export default {
  name: "PhotoUpdated",
  props: {
    photo: null,
  },

  data() {
    return {};
  },

  components: {
    PersonalUpdated,
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
