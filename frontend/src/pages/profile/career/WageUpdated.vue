<template>
  <career-updated class="focus-area">
    <template #result>
      <p class="callout text-center">The wage has been updated.</p>
    </template>
  </career-updated>
</template>

<script>
import { userProfileUtils } from "../../../utils/index";

import CareerUpdated from "../templates/CareerUpdated";
export default {
  name: "WageUpdated",
  props: {},

  data() {
    return {
      wage: userProfileUtils.fetchWage(),
    };
  },

  components: {
    CareerUpdated,
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
