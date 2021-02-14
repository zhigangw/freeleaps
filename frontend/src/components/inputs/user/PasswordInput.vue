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
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "PasswordInput",
  props: {
    label: null,
    modelValue: null,
  },
  components: {
    LabelTextInput,
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.password = val;
      },
    },
    password: function (val) {
      this.$emit("update:modelValue", val);
    },
  },
  data() {
    return {
      password: null,
      passwordFormatMessage: userProfileValidator.passwordValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        userProfileValidator.passwordValidator,
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
