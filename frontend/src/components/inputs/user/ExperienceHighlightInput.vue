<template>
  <label-text-area-input
    ref="labelAreaTextInput"
    :title="highlightFormatMessage"
    :placeholder="highlightPlaceHolder"
    :label="label"
    v-model.trim="highlight"
  />
</template>
<script>
import LabelTextAreaInput from "../templates/LabelTextInput";
import { UserProfileValidator } from "../../../utils/index";

export default {
  name: "ExperienceHighlightInput",
  props: {
    label: null,
  },
  components: {
    LabelTextAreaInput,
  },
  data() {
    return {
      highlight: null,
      highlightPlaceHolder:
        "A couple of sentences about your achievement which you think will impress people",
      highlightFormatMessage: UserProfileValidator.getExperienceHighlightFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelAreaTextInput.validate(
        UserProfileValidator.validateExperienceHighlight,
        this.highlight
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
