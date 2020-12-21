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
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "ExperienceHighlightInput",
  props: {
    label: null,
    modelValue: null,
  },
  components: {
    LabelTextAreaInput,
  },

  emits: ["update:modelValue"],
  data() {
    return {
      highlight: null,
      highlightPlaceHolder:
        "A couple of sentences about your achievement which you think will impress people",
      highlightFormatMessage: userProfileValidator.headlineValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  watch: {
    highlight: function (val) {
      this.$emit("update:modelValue", val);
    },
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.highlight = val;
      },
    },
  },

  methods: {
    validate() {
      return this.$refs.labelAreaTextInput.validate(
        userProfileValidator.highlightValidator,
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
