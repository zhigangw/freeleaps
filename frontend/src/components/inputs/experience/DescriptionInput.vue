<template>
  <label-text-area-input
    ref="labelAreaTextInput"
    :title="formatMessage"
    :placeholder="descriptionPlaceHolder"
    :label="label"
    v-model.trim="description"
  />
</template>
<script>
import LabelTextAreaInput from "../templates/LabelTextInput";
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "ExperienceDescriptionInput",
  props: {
    label: null,
    modelValue: null,
  },
  emits: ["update:modelValue"],
  components: {
    LabelTextAreaInput,
  },
  data() {
    return {
      description: null,
      descriptionPlaceHolder:
        "provide more details on the result/achievement/challange in this period",
      formatMessage: userProfileValidator.descriptionValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  watch: {
    description: function (val) {
      this.$emit("update:modelValue", val);
    },
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.description = val;
      },
    },
  },
  methods: {
    validate() {
      return this.$refs.labelAreaTextInput.validate(
        userProfileValidator.descriptionValidator,
        this.description
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
