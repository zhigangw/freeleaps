<template>
  <div>
    <h3 class="slogan">Find a trustworthy partner, simplify the work, secure your return.</h3>
    <div class="contian-div">
      <div class="row row-cols-4">
        <div class="col"></div>
        <div class="col-6 col-md-4 col-lg-2">
          <email-input ref="emailInput" :placeholder="'Your Email'" v-model="email" />
        </div>
        <div class="col-3 col-md-2 col-lg-1">
          <button class="btn btn-primary mb-3" @click="checkRegister">Start</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from "../../components/inputs/user/EmailInput";
import { UserProfileApi } from "../../utils/index";

export default {
  name: "FrontDoor",
  props: {},

  data() {
    return {
      email: null,
    };
  },

  components: {
    EmailInput,
  },

  created() {},
  mounted() {},
  methods: {
    checkRegister() {
      let validateError = this.$refs.emailInput.validate();
      if (!validateError) {
        UserProfileApi.checkUserExistanceByEmail(this.email)
          .then((response) => {
            let userExists = response.data.userExists;
            if (userExists) {
              let userNameExists = response.data.userNameExists;
              if (userNameExists) {
                // go to use username to login
                this.mnx_navToSignin();
              } else {
                // go to user email to login
                this.mnx_navToEmailSignin(this.email);
              }
            } else {
              // go to user account creation
              this.mnx_navToEmailSignup(this.email);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
