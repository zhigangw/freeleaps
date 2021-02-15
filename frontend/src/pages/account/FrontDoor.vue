<template>
  <div>
    <h3 class="slogan">Find a trustworthy partner, simplify the work, secure your return.</h3>
    <form @submit.prevent="checkRegister">
      <div class="input-group mb-3">
        <input
          class="form-control mb-3"
          type="text"
          :placeholder="'Email or Username'"
          v-model="emailOrUsername"
        />
        <button type="submit" class="form-control btn btn-primary mb-3">Start</button>
      </div>
    </form>
    <p v-if="message != null">{{message}}</p>
  </div>
</template>

<script>
import {UserAuthApi, UserProfileApi, userProfileValidator } from "../../utils/index";
export default {
  name: "FrontDoor",
  props: {},

  data() {
    return {
      emailOrUsername: null,
      message: null,
    };
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    checkByEmail() {
      UserProfileApi.checkUserExistanceByEmail(this.emailOrUsername)
        .then((response) => {
          let userExists = response.data.userExists;
          if (userExists) {
            let userNameExists = response.data.userNameExists;
            if (userNameExists) {
              // go to use username to login
              this.mnx_navToSignin(this.emailOrUsername);
            } else {
              // go to user email to login
              this.mnx_navToEmailSignin(this.emailOrUsername);
            }
          } else {
            // go to user account creation
            this.mnx_navToEmailSignup(this.emailOrUsername);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkByUsername() {
      UserAuthApi.checkUsernameAvailability(this.emailOrUsername)
        .then((response) => {
          if (!response.data.available) {
            // go to use username to login
            this.mnx_navToSignin(this.emailOrUsername);
          } else {
            this.message =
              "Username dosen't exist. Please type in your email or an valid username";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkRegister() {
      this.message = null;
      if (this.emailOrUsername === null || this.emailOrUsername.length < 1) {
        this.message = "Please type in your email or username";
        return;
      }

      if (this.emailOrUsername.includes("@")) {
        this.message = userProfileValidator.emailValidator.validate(
          this.emailOrUsername
        );
        if (this.message == null) {
          this.checkByEmail();
        }
        return;
      }
      this.message = userProfileValidator.usernameValidator.validate(
        this.emailOrUsername
      );
      if (this.message == null) {
        this.checkByUsername();
      }
      return;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slogan {
  @extend .text-start;
  padding: 2%;
  color: $info;
}
.contian-div {
  @extend .container;
  padding: 2%;
  /*border: solid black 1px;*/
}
</style>
