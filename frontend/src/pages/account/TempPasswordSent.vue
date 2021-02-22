<template>
  <div>
    <h3>Your temporary password has been sent to your email box. Please check.</h3>
    <button class="btn btn-primary mb-3" @click="resentTempPassword">Send Again</button>
    <button class="btn btn-primary mb-3" @click="backToUserSignin">Sign In</button>
  </div>
</template>

<script>
import { UserAuthApi } from "../../utils/index";

export default {
  name: "TempPasswoardSent",
  props: {
    email: {
      required: true,
      type: String,
    },
    username: {
      required: false,
      default: null,
      type: String,
    },
  },

  data() {
    return {};
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    backToUserSignin() {
      if (this.username !== null && this.username !== "null") {
        this.mnx_navToSignin(this.username);
      } else {
        this.mnx_navToEmailSignin(this.email);
      }
    },
    resentUsername() {
      UserAuthApi.sendTempPasswordToEmail(this.email)
        .then((response) => {
          response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
