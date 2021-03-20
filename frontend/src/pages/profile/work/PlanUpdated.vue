<template>
  <work-updated class="focus-area">
    <template #result>
      <p class="callout text-center">The plan has been updated.</p>
    </template>
  </work-updated>
</template>

<script>
import { userProfileUtils } from "../../../utils/index";

import WorkUpdated from "../templates/WorkUpdated";
export default {
  name: "PlanUpdated",
  props: {},

  data() {
    return {
      plan: null,
    };
  },

  components: {
    WorkUpdated,
  },

  created() {},
  mounted() {
    this.plan = userProfileUtils.fetchSubscriptionPlan();
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
