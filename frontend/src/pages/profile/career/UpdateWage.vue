<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Wage</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateWage">
            <div class="input-group-div">
              <label class="form-label mx-1" for="wage.amount">$</label>
              <input
                id="wage.amount"
                type="number"
                class="form-control"
                v-model="wage.amount"
                placeholder="The hourly wage you are expecting."
                aria-label="wage"
                aria-describedby="wage-input"
              />
            </div>
            <div class="input-group-div">
              <button class="input-headline-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-headline-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CareerProfileApi, userProfileUtils } from "../../../utils/index";

export default {
  name: "UpdateWage",
  props: {},

  data() {
    return {
      wage: userProfileUtils.fetchWage()
        ? userProfileUtils.fetchWage()
        : { amount: 0 },
      errorMessage: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateWage() {
      //TODO: verify the input
      if (this.hasError()) {
        return;
      }

      CareerProfileApi.updateWage(this.wage)
        .then((response) => {
          response;
          userProfileUtils.fillWage(this.wage);
          this.mnx_navToWageUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    goBack() {
      this.mnx_goBack();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .input-group;
  @extend .my-5;
}

.control-text {
  @extend .form-control;
  @extend .text-wrap;
}

.input-headline-submit {
  @extend .form-submit;
}
.input-headline-cancel {
  @extend .form-cancel;
}
</style>
