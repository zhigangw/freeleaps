<template>
  <profile-updated class="focus-area">
    <template #result>
      <p class="callout text-center">
        Your location has been updated as
        <span class="fw-bold">{{location}}</span>
      </p>
    </template>
  </profile-updated>
</template>

<script>
import { userProfileUtils } from "../../../utils/index";

import ProfileUpdated from "../templates/ProfileUpdated";
export default {
  name: "LocationUpdated",
  props: {},

  data() {
    return {
      location: null,
    };
  },

  components: {
    ProfileUpdated,
  },

  created() {},
  mounted() {
    this.location = userProfileUtils.fetchLocation();
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
