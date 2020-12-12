<template>
  <label-text-input
    ref="labelTextInput"
    :type="'text'"
    :title="mobileFormatMessage"
    :label="label"
    v-model.trim="mobile"
  />
</template>
<script>
import LabelTextInput from "../templates/LabelTextInput";
import { UserProfileValidator } from "../../../utils/index";

export default {
  name: "MobileInput",
  props: {
    label: null,
  },
  components: {
    LabelTextInput,
  },
  data() {
    return {
      mobile: null,
      mobileFormatMessage: UserProfileValidator.getMobileFormatRequirement(),
    };
  },

  created() {},
  mounted() {
  },
  methods: {
    validate() {
      return this.$refs.labelTextInput.validate(
        UserProfileValidator.validateMobile,
        this.mobile
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
