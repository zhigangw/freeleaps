<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update username</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateUsername">
            <div class="input-group-div">
              <span class="input-label" id="current-username">Current</span>
              <span
                class="input-username-text"
                aria-label="current-username"
                aria-describedby="current-username"
              >{{currentUsername}}</span>
            </div>
            <div class="input-group-div">
              <span class="input-label" id="username-input">New</span>
              <input
                class="input-username-input"
                type="text"
                aria-label="Username-input"
                aria-describedby="username input"
                v-model="newUsername"
              />
            </div>
            <button class="input-username-submit" type="submit">Submit</button>
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
  UserAuthApi,
} from "../../utils/index";

export default {
  name: "UserAccount",
  props: {
    username: null,
  },

  data() {
    return {
      currentUsername: "",
      newUsername: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.currentUsername = this.username;
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateUsername() {
      this.errorMessage = userProfileValidator.usernameValidator.validate(
        this.newUsername
      );
      if (this.hasError()) {
        return;
      }
      UserAuthApi.checkUsernameAvailability(this.newUsername)
        .then((response) => {
          if (response.data && response.data.available == true) {
            UserAuthApi.updateUsername(this.newUsername)
              .then((response) => {
                this.currentUsername = response.data.identity;
                this.newUsername = null;
              })
              .catch((error) => {
                this.mnx_backendErrorHandler(error);
              });
          }
          else{
              this.errorMessage = "The username has been taken."
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
.input-group-div {
  @extend .input-group;
  @extend .my-3;
}

.input-label {
  @extend .h-90;
  @extend .w-25;
  @extend .text-start;
}

.input-username-text {
  @extend .form-control;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}
.input-username-input {
  @extend .form-control;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}
.input-username-submit {
  @extend .form-control;
  @extend .btn;
  @extend .btn-primary;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}
</style>
