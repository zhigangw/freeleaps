<template>
  <label-text-input
    ref="labelTextInput"
    :type="'text'"
    :title="nameFormatMessage"
    :label="label"
    v-model.trim="name"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { UserProfileValidator } from "../../../utils/index";

export default {
  name: "NameInput",
  props: {
    label: null,
  },
  components: {
    LabelTextInput,
  },
  data() {
    return {
      name: null,
      nameFormatMessage: UserProfileValidator.getNameFormatRequirement(),
    };
  },

  created() {},
  mounted() {
  },
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        UserProfileValidator.validateName,
        this.name
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
