<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Account</p>
        <div class="form-group border-0">
          <div class="input-group-div">
            <span class="input-label" id="username-input">Username</span>
            <button
              class="input-link-button"
              type="button"
              aria-label="Username"
              aria-describedby="username-input"
              @click="gotoUpdateUsername"
            >{{username}}</button>
          </div>
          <div class="input-group-div">
            <span class="input-label" id="password-input">Password</span>
            <button
              class="input-link-button"
              type="button"
              aria-label="Password"
              aria-describedby="password-input"
              @click="gotoUpdatePassword"
            >{{password}}</button>
          </div>
          <div class="input-group-div">
            <span class="input-label" id="email-input">Email</span>
            <button
              class="input-link-button"
              type="button"
              aria-label="Email"
              aria-describedby="email-input"
            >{{email}}</button>
          </div>
          <div class="input-group-div">
            <span class="input-label" id="mobile-input">Mobile</span>
            <button
              class="input-link-button"
              type="button"
              aria-label="Mobile"
              aria-describedby="mobile-input"
            >{{mobile}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi } from "../../utils/index";

export default {
  name: "UserAccount",
  props: {},

  data() {
    return {
      username: "not set",
      password: "********",
      email: "not set",
      mobile: "not set",
      authProfile: {},
    };
  },

  created() {},
  mounted() {
    this.fetchUserAccount();
  },
  methods: {
    populateAuthData() {
      if (this.authProfile) {
        if ("identity" in this.authProfile && this.authProfile.identity) {
          this.username = this.authProfile.identity;
        }
        if ("email" in this.authProfile && this.authProfile.email) {
          this.email = this.authProfile.email;
        }
        if ("mobile" in this.authProfile && this.authProfile.mobile) {
          this.mobile = this.authProfile.mobile;
        }
      }
    },
    async fetchUserAccount() {
      UserProfileApi.fetchAccount()
        .then((response) => {
          this.authProfile = response.data;
          this.populateAuthData();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    gotoUpdateUsername() {
      this.mnx_navToUpdateUsername(this.username);
    },
    gotoUpdatePassword() {
      this.mnx_navToUpdatePassword();
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

.input-link-button {
  @extend .btn;
  @extend .btn-link;
  @extend .form-control;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}
</style>
