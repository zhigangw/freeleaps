<template>
  <div class="main-body">
    <div class="story-board">
      <h3>Subscription</h3>
      <div class="focus-area">
        <p class="callout">Choose a plan</p>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UserWork",
  props: {},

  data() {
    return {
      workProfile: {},
      plan: {},
    };
  },

  components: {},

  created() {},
  mounted() {
    this.fetchWork();
  },

  methods: {
    async fetchWork() {
      UserProfileApi.fetchWork()
        .then((response) => {
          this.workProfile = response.data.workProfile;
          this.plan = response.data.plan;
          if (!this.plan) {
            this.mnx_navToChoosePlan();
          }
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
