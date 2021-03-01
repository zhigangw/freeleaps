<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Please provide your email address.</p>
        <div class="form-group">
          <form @submit.prevent="submitForm">
            <input class="form-group-item" type="text" v-model="email" />
            <button class="form-group-item btn btn-primary" type="submit">Submit</button>
            <p class="form-group-item errorInput border-0" v-if="hasInvalidInput()">{{error}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserAuthApi, userProfileValidator } from "../../utils/index";
export default {
  name: "UserForgetPassword",
  props: {},
  components: {},
  watch: {},

  data() {
    return {
      email: null,
      error: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return this.error != null;
    },

    async sendTempPassword() {
      UserAuthApi.sendTempPasswordToEmail(this.email, this.username)
        .then((response) => {
          response;
          this.mnx_navToTempPasswordSent(this.email, this.username);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async submitForm() {
      this.error = userProfileValidator.emailValidator.validate(this.email);

      if (this.hasInvalidInput()) {
        return;
      }

      UserAuthApi.sendUsernameToEmail(this.email)
        .then((response) => {
          response;
          this.mnx_navToUsernameSent(this.email);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}
</style>
