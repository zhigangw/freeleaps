<template>
  <personal-updated class="focus-area">
    <template #result>
      <p class="callout text-center">
        Your location has been updated as
        <span class="fw-bold">{{location}}</span>
      </p>
    </template>
  </personal-updated>
</template>

<script>
import { userProfileUtils } from "../../../utils/index";

import PersonalUpdated from "../templates/PersonalUpdated";
export default {
  name: "LocationUpdated",
  props: {},

  data() {
    return {
      location: null,
    };
  },

  components: {
    PersonalUpdated,
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
