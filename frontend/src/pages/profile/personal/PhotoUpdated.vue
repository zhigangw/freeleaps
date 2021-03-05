<template>
  <profile-updated class="focus-area">
    <template #result>
      <p class="callout text-center">Your photo has been updated</p>
    </template>
  </profile-updated>
</template>

<script>
import ProfileUpdated from "../templates/ProfileUpdated";
export default {
  name: "PhotoUpdated",
  props: {
    photo: null,
  },

  data() {
    return {};
  },

  components: {
    ProfileUpdated,
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
