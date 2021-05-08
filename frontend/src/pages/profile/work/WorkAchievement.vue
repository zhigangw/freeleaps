<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Achievement</p>
        <div class="plan-item-div">
          <label class="plan-item-label">Memeber Since:</label>
          <span
            v-if="(achievements.membership)"
            class="plan-item-value"
          >{{formalizeDate(achievements.membership.memberSince)}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Received Stars:</label>
          <span class="plan-item-value">{{achievements.membership.receivedStars}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Amount Spent:</label>
          <span
            v-if="(achievements.payment)"
            class="plan-item-value"
          >{{achievements.payment.amountSpent}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Escorted Deposit:</label>
          <span
            v-if="(achievements.payment)"
            class="plan-item-value"
          >{{achievements.payment.escortedDeposit}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Posted Requests:</label>
          <span
            v-if="(achievements.project)"
            class="plan-item-value"
          >{{achievements.project.requestPosted}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Ongoing Projects:</label>
          <span
            v-if="(achievements.project)"
            class="plan-item-value"
          >{{achievements.project.ongoingProjects}}</span>
        </div>
        <div class="plan-item-div">
          <label class="plan-item-label">Complete Projects:</label>
          <span
            v-if="(achievements.project)"
            class="plan-item-value"
          >{{achievements.project.completedProjects}}</span>
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
      achievements: {
        membership: {},
        payment: {},
        project: {},
      },
    };
  },

  components: {},

  created() {},
  mounted() {
    this.fetchAchievement();
  },

  methods: {
    async fetchAchievement() {
      UserProfileApi.fetchAchievement()
        .then((response) => {
          this.achievements = response.data;
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
    formalizeDate(date) {
      return DateUtils.FromJsonToString(date);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
