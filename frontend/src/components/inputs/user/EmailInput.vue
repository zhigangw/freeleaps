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
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "EmailInput",
  props: {
    label: null,
    modelValue: null,
  },
  emits: ["update:modelValue"],
  components: {
    LabelTextInput,
  },

  watch: {
    modelValue: {
      immediate: true,
      handler: function (val) {
      this.email = val;
    }},
    email: function (val) {
      this.$emit("update:modelValue", val);
    },
  },

  data() {
    return {
      email: null,
      emailFormatMessage: userProfileValidator.emailValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {
    
  },
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        userProfileValidator.emailValidator,
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
