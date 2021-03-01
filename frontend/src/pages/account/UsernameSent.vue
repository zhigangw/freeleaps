<template>
  <div>
    <h3>Your username has been sent to your email box. Please check.</h3>
    <button class="btn btn-primary mb-3" @click="resentUsername">Send Again</button>
    <button class="btn btn-primary mb-3" @click="backToUserSignin">Sign In</button>
  </div>
</template>

<script>
import { UserAuthApi } from "../../utils/index";

export default {
  name: "UsernameSent",
  props: {
    email: {
      required: true,
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
      this.mnx_navToSignin(this.email);
    },
    resentUsername() {
      UserAuthApi.sendUsernameToEmail(this.email)
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
