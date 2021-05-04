<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Achievement</p>
        <div class="plan-item-div">
          <label class="plan-item-label">Memeber Since:</label>
          <span v-if="(workProfile.achievements.membership)" class="plan-item-value">{{formalizeDate(workProfile.achievements.membership.memberSince)}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Received Stars:</label>
          <span class="plan-item-value">{{workProfile.achievements.membership.receivedStars}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Amount Spent:</label>
          <span v-if="(workProfile.achievements.payment)" class="plan-item-value">{{workProfile.achievements.payment.amountSpent}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Escorted Deposit:</label>
          <span v-if="(workProfile.achievements.payment)" class="plan-item-value">{{workProfile.achievements.payment.escortedDeposit}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Posted Requests:</label>
          <span v-if="(workProfile.achievements.project)" class="plan-item-value">{{workProfile.achievements.project.requestPosted}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Ongoing Projects:</label>
          <span v-if="(workProfile.achievements.project)" class="plan-item-value">{{workProfile.achievements.project.ongoingProjects}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Complete Projects:</label>
          <span v-if="(workProfile.achievements.project)" class="plan-item-value">{{workProfile.achievements.project.completedProjects}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi, DateUtils } from "../../../utils/index";

export default {
  name: "WorkAchievement",
  props: {},

  data() {
    return {
      workProfile: {
        achievements: {
          membership: {},
          payment: {},
          project: {},
        },
      },
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
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
    formalizeDate(date){
        return DateUtils.FromJsonToString(date)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
