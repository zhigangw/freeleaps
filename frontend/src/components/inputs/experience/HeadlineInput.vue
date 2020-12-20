<template>
  <label-text-input
    ref="labelTextInput"
    :type="'text'"
    :title="titleFormatMessage"
    :placeholder="titlePlaceHolder"
    :label="label"
    v-model.trim="title"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "ExperienceHeadlineInput",
  props: {
    label: null,
  },
  components: {
    LabelTextInput,
  },
  data() {
    return {
      title: null,
      titlePlaceHolder:
        "What would you like people to call you, like, an experienced software engineer in IOT",
      titleFormatMessage: userProfileValidator.headlineValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        userProfileValidator.headlineValidator.validate,
        this.title
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
