<template>
  <div class="main-body">
    <div class="story-board">
      <p class>Choose a plan</p>
      <div class="focus-area">
        <div class="plan-item-div">
          <label class="plan-item-label">Name:</label>
          <span class="plan-item-value" v-for="(plan, index) in plans" :key="index">{{plan.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Reachout:</label>
          <span
            class="plan-item-value"
            v-for="(plan, index) in plans"
            :key="index"
          >{{plan.reachoutPlan.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">SCM:</label>
          <span
            class="plan-item-value"
            v-for="(plan, index) in plans"
            :key="index"
          >{{plan.codeMangagement.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Collabration:</label>
          <span
            class="plan-item-value"
            v-for="(plan, index) in plans"
            :key="index"
          >{{plan.collabration.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Price:</label>
          <span
            class="plan-item-value"
            v-for="(plan, index) in plans"
            :key="index"
          >{{plan.priceTag.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Payment:</label>
          <span
            class="plan-item-value"
            v-for="(plan, index) in plans"
            :key="index"
          >{{plan.paymentPlan.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">
            <button  class="btn btn-secondary"  v-if="(currentPlan)" @click="goBack">Cancel</button>
          </label>
          <span class="plan-item-value" v-for="(plan, index) in plans" :key="index">
            <button class="btn btn-primary" :id="index" @click="choosePlan(plan)">Choose</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SubscriptionApi,
  UserProfileApi,
  userProfileUtils,
  OIDUtils,
} from "../../../utils/index";

export default {
  name: "ChoosePlan",
  props: {},

  data() {
    return {
      plans: [],
      currentPlan:null,
    };
  },

  components: {},

  created() {},
  mounted() {
    this.currentPlan = userProfileUtils.fetchSubscriptionPlan();
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
    
    choosePlan(plan) {
      UserProfileApi.choosePackage(OIDUtils.FromJson(plan))
        .then((response) => {
          response;
          userProfileUtils.fillSubscriptionPlan(plan);
          this.mnx_navToPlanUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    goBack(){
      this.mnx_goBack();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plan-item-div {
  @extend .d-flex;
  @extend .w-100;
  @extend .w-lg-80;
  @extend .w-xl-60;
  @extend .mx-auto;
}

.plan-item-label {
  @extend .my-1;
  @extend .w-30;
  @extend .text-start;
}

.plan-item-value {
  @extend .my-1;
  @extend .text-start;
}
</style>
