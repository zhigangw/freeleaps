<template>
  <label-select-input
    ref="labelSelectInput"
    :title="locationFormatMessage"
    :label="label"
    v-model="location"
  />
</template>
<script>
import LabelSelectInput from "../templates/LabelSelectInput";
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "LocationInput",
  props: {
    label: null,
  },
  components: {
    LabelSelectInput,
  },
  data() {
    return {
      location: null,
      locationFormatMessage: userProfileValidator.countryValidator.getFormatRequirement(),
    };
  },

  created() {
  },
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelSelectInput.validate(
        userProfileValidator.countryValidator.validate,
        this.location
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
