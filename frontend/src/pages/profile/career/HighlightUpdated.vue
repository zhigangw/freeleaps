<template>
  <career-updated class="focus-area">
    <template #result>
      <p class="callout text-center">The highlight has been updated.</p>
    </template>
  </career-updated>
</template>

<script>
import { userProfileUtils } from "../../../utils/index";

import CareerUpdated from "../templates/CareerUpdated";
export default {
  name: "HeadlineUpdated",
  props: {},

  data() {
    return {
      highlight: null,
    };
  },

  components: {
    CareerUpdated,
  },

  created() {},
  mounted() {
    this.highlight = userProfileUtils.fetchHighlight();
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
