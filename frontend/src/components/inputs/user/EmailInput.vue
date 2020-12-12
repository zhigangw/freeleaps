<template>
  <label-text-input
    ref="labelTextInput"
    :type="'text'"
    :title="emailFormatMessage"
    :label="label"
    v-model.trim="email"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { UserProfileValidator } from "../../../utils/index";

export default {
  name: "EmailInput",
  props: {
    label: null,
  },
  components: {
    LabelTextInput,
  },
  data() {
    return {
      email: null,
      emailFormatMessage: UserProfileValidator.getEmailFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        UserProfileValidator.validateEmail,
        this.email
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
