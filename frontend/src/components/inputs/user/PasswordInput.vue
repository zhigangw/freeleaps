<template>
  <label-text-input
    ref="labelTextInput"
    :type="'password'"
    :title="passwordFormatMessage"
    :label="label"
    v-model.trim="password"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { UserProfileValidator } from "../../../utils/index";

export default {
  name: "PasswordInput",
  props: {
    label: null,
  },
  components: {
    LabelTextInput,
  },
  data() {
    return {
      password: null,
      passwordFormatMessage: UserProfileValidator.getPasswordFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        UserProfileValidator.validatePassword,
        this.password
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
