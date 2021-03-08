<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Name</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateName">
            <div class="input-group-div">
              <input
                class="input-firstname-input"
                type="text"
                v-model="newFirstname"
                placeholder="first name"
              />
              <input
                class="input-lastname-input"
                type="text"
                v-model="newLastname"
                placeholder="last name"
              />
            </div>
            <div class="input-group-div">
              <button class="input-username-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-username-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  userProfileValidator,
  UserProfileApi,
  userProfileUtils,
} from "../../../utils/index";

export default {
  name: "UpdateUsername",
  props: {},

  data() {
    return {
      firstname: null,
      lastname: null,
      newFirstname: null,
      newLastname: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    [this.firstName, this.lastName] = userProfileUtils.fetchName();
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateName() {
      this.errorMessage = userProfileValidator.nameValidator.validate(
        this.newFirstname
      );

      if (this.hasError()) {
        return;
      }
      this.errorMessage = userProfileValidator.nameValidator.validate(
        this.newLastname
      );

      if (this.hasError()) {
        return;
      }

      UserProfileApi.updateName(this.newFirstname, this.newLastname)
        .then((response) => {
          response;
          userProfileUtils.fillName(this.newFirstname, this.newLastname);
          this.mnx_navToNameUpdated();
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

.input-firstname-input {
  @extend .form-control;
  @extend .my-3;
  @extend .mx-1;
  @extend .py-0;
  @extend .text-center;
}

.input-lastname-input {
  @extend .form-control;
  @extend .my-3;
  @extend .mx-1;
  @extend .py-0;
  @extend .text-center;
}
.input-username-submit {
  @extend .form-submit;
}
.input-username-cancel {
  @extend .form-cancel;
}
</style>
