<template>
  <div class="main-body">
    <div class="story-board">
      <div v-if="plan !==null" class="focus-area">
        <p class="callout">Plan</p>
        <div class="plan-item-div">
          <label class="plan-item-label">Name:</label>
          <button class="plan-item-value_clickable" @click="choosePlan(plan)">{{plan.name}}</button>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Reachout:</label>
          <span class="plan-item-value">{{plan.reachoutPlan.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">SCM:</label>
          <a
            class="plan-item-value_link"
            :href="plan.codeMangagement.entryUrl"
            target="_blank"
          >{{plan.codeMangagement.name}}</a>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Collabration:</label>
          <a
            class="plan-item-value_link"
            :href="plan.collabration.entryUrl"
            target="_blank"
          >{{plan.collabration.name}}</a>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Price:</label>
          <span class="plan-item-value">{{plan.priceTag.name}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Payment:</label>
          <span class="plan-item-value">{{plan.paymentPlan.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi, userProfileUtils } from "../../../utils/index";

export default {
  name: "UserWork",
  props: {},

  data() {
    return {
      workProfile: {},
      plan: null,
      username:null,
    };
  },

  components: {},

  created() {},
  mounted() {
    this.fetchWork();
  },

  methods: {
    choosePlan(plan) {
      userProfileUtils.fillSubscriptionPlan(plan);
      this.mnx_navToChoosePlan();
    },
    async fetchWork() {
      UserProfileApi.fetchWork()
        .then((response) => {
          this.workProfile = response.data.workProfile;
          this.plan = response.data.plan;
          this.username = response.data.username;
          if(!this.username){
            this.mnx_navToChooseUsername();
            return;
          }
          if (!this.plan) {
            this.mnx_navToChoosePlan();
            return;
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
