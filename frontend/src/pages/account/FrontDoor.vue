<template>
  <div contianer0>
    <div class="contianer1">
      <p class="slogan">Find a trustworthy partner, simplify the work, secure your return.</p>
      <div class="contianer2">
        <form @submit.prevent="checkRegister">
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              :placeholder="'Email or Username'"
              v-model="emailOrUsername"
            />
            <button type="submit" class="form-control btn btn-primary">Start</button>
          </div>
        </form>
        <p v-if="message != null">{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UserAuthApi,
  UserProfileApi,
  userProfileValidator,
} from "../../utils/index";
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
  color: $info;
}

.contianer0 {
  @extend .border;
}
.contianer1 {
  @extend .border;
  @extend .mx-auto;
  @extend .my-5;
  @extend .pt-1;
  @extend .px-2;
  @extend .pb-5;
  @extend .w-100;
  @extend .w-md-75;
  @extend .w-xl-50;
  @extend .w-xxl-50;
}

.contianer2 {
  @extend .border;
  @extend .mx-auto;
  @extend .mt-5;
  @extend .w-100;
  @extend .w-md-75;
}
</style>
