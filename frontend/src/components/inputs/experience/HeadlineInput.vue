<template>
  <label-text-input
    ref="labelTextInput"
    :type="'text'"
    :title="titleFormatMessage"
    :placeholder="titlePlaceHolder"
    :label="label"
    v-model.trim="headline"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "ExperienceHeadlineInput",
  props: {
    label: null,
    modelValue: null,
  },
  components: {
    LabelTextInput,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      headline: null,
      titlePlaceHolder:
        "What would you like people to call you, like, an experienced software engineer in IOT",
      titleFormatMessage: userProfileValidator.headlineValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  watch: {
    headline: function (val) {
      this.$emit("update:modelValue", val);
    },
    modelValue: function (val) {
      this.headline = val;
    },
  },
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        userProfileValidator.headlineValidator,
        this.headline
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
