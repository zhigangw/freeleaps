<template>
  <label-image-input
    ref="labelImageInput"
    :title="photoFormatMessage"
    :label="label"
    v-model="photo"
  />
</template>
<script>
import LabelImageInput from "../templates/LabelImageInput";
import { userProfileValidator } from "../../../utils/index";

export default {
  name: "PhotoInput",
  props: {
    label: null,
  },
  components: {
    LabelImageInput,
  },
  data() {
    return {
      photo: null,
      photoFormatMessage: userProfileValidator.imageValidator.getFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.labelImageInput.validate(
        userProfileValidator.imageValidator.validate,
        this.photo
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
