<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class>plan</p>
        <div class="plan-item-div">
            <label>Name</label>
        </div>
        <button class="btn btn-primary my-5" @click="backToAccount">Continue to Account</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SubscriptionApi,
} from "../../../utils/index";

export default {
  name: "ChoosePlan",
  props: {
  },

  data() {
    return {
      plans: {},
    };
  },

  components: {},

  created() {},
  mounted() {
    this.fetchServicePlans();
  },

  methods: {
    async fetchServicePlans() {
      SubscriptionApi.fetchPlans()
        .then((response) => {
          this.plans = response.data;
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

.plan-item-div {
  @extend .d-flex;
}

.plan-item-label {
  @extend .my-1;
}

.plan-item-value {
  @extend .my-1;
}

</style>
