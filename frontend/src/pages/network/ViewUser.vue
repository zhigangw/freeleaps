<template>
  <div class="row-flow-container">
    <div class="row-flow-header flex-wrap">
      <div class="w-80 mx-auto d-flex flex-wrap">
        <p class="w-100 text-start text-wrap"></p>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Account</h4>
      <div class="lf-body-block-container-body">
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Username</h5>
          <p class="lf-body-item--block-text">{{getFormalizedString(user.account.identity)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Email</h5>
          <p class="lf-body-item--block-text">{{getFormalizedString(user.account.email)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Mobile</h5>
          <p class="lf-body-item--block-text">{{getFormalizedString(user.account.mobile)}}</p>
        </div>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Personal</h4>
      <div class="lf-body-block-container-body">
        <div class="lf-body-item-block">
          <div style="height:50pt">
            <img class="lf-body-item-block-img" :src="user.personal.photo" />
          </div>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Name</h5>
          <p
            class="lf-body-item--block-text"
          >{{getFormalizedString(user.personal.firstName)}} {{getFormalizedString(user.personal.lastName)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Location</h5>
          <p class="lf-body-item--block-text">{{getFormalizedString(user.personal.location)}}</p>
        </div>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Career</h4>
      <div class="w-100 p-3">
        <div class="lf-item-flex-box">
          <h5 class="lf-body-item-block-label">Headline</h5>
          <p class="lf-body-item--block-text">{{user.career.experience.headline}}</p>
        </div>
        <div class="lf-item-flex-box">
          <h5 class="lf-body-item-block-label">Highlight</h5>
          <p class="lf-body-item--block-text">{{user.career.experience.highlight}}</p>
        </div>
        <div
          v-for="(period, index) in user.career.experience.periods"
          :key="index"
          class="lf-item-flex-box"
        >
          <h5 class="lf-body-item-block-label">{{getPeriodHeadline(period)}}}</h5>
          <p class="lf-body-item--block-text">{{(period.description)}}</p>
        </div>
        <div class="lf-item-flex-box">
          <h5 class="lf-body-item-block-label">Preferred Roles</h5>
          <div class="roles-container">
            <p
              v-for="(role, index) in user.career.preferredRoles"
              :key="index"
              class="role-text"
            >{{role}}</p>
          </div>
        </div>
        <div class="lf-item-flex-box">
          <h5 class="lf-body-item-block-label">Hourly Wage</h5>
          <div class="roles-container">
            <p class="lf-body-item--block-text">{{user.career.wage.amount}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lf-submit-container">
      <button class="if-cancel" type="button" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
import { userProfileUtils, DateUtils } from "../../utils/index";
export default {
  name: "ViewUser",
  props: {},

  data() {
    return {
      user: userProfileUtils.fetchUser(),
    };
  },

  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    getFormalizedMoney(money) {
      return money ? money : 0;
    },

    getFormalizedString(s) {
      return s ? s : "--";
    },
    getFormalizedDate(date) {
      return date ? DateUtils.FromJsonToString(date) : "--";
    },

    getPeriodHeadline(period) {
      return (
        this.getFormalizedDate(period.startDate) +
        " - " +
        this.getFormalizedDate(period.endDate) +
        " : " +
        this.getFormalizedString(period.getPeriodHeadline)
      );
    },

    goBack() {
      this.mnx_goBack();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
