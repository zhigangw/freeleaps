<template>
  <personal-updated class="focus-area">
    <template #result>
      <p class="callout text-center">
        Your name has been updated as
        <span class="fw-bold">{{firstName}} {{lastName}}</span>
      </p>
    </template>
  </personal-updated>
</template>

<script>
import { userProfileUtils } from "../../../utils/index";

import PersonalUpdated from "../templates/PersonalUpdated";
export default {
  name: "NameUpdated",
  props: {},

  data() {
    return {
      firstName: null,
      lastName: null,
    };
  },

  components: {
    PersonalUpdated,
  },

  created() {},
  mounted() {
    [this.firstName, this.lastName] = userProfileUtils.fetchName();
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
