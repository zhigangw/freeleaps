<template>
  <label-text-input
    ref="labelTextInput"
    :type="'text'"
    :title="userNameFormatMessage"
    :label="label"
    v-model.trim="username"
    @change="checkUsernameAvailability"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { UserAuthApi, userProfileValidator } from "../../../utils/index";

export default {
  name: "UsernameInput",
  props: {
    checkAvailability: Boolean,
    label: null,
  },
  components: {
    LabelTextInput,
  },
  data() {
    return {
      username: null,
      userNameFormatMessage: userProfileValidator.usernameValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    async checkUsernameAvailability() {
      if (!this.checkAvailability) return;

      UserAuthApi.checkUsernameAvailability(this.username)
        .then((response) => {
          this.isUsernameNotAvailable = response.data.available == false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    validate() {
      return this.$refs.labelTextInput.validate(
        userProfileValidator.usernameValidator.validate,
        this.username
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
