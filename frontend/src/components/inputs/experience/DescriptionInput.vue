<template>
  <label-text-area-input
    ref="labelAreaTextInput"
    :title="formatMessage"
    :placeholder="descriptionPlaceHolder"
    :label="label"
    :input="onInput($event)"
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
  methods: {
    onInput(event) {
      event;
      this.$emit("update:modelValue", this.description);
    },
    
    validate() {
      return this.$refs.labelAreaTextInput.validate(
        userProfileValidator.descriptionValidator.validate,
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
