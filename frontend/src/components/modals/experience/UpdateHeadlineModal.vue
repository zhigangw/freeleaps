<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Headline</h3>
    </template>
    <template #body>
      <experience-headline-input ref="headlineInput" v-model="headline" :label="'new headline:'" />
    </template>
    <template #footer>
      <button @click="updateHeadline">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import ExperienceHeadlineInput from "../../inputs/experience/HeadlineInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdateExperienceHeadlineModal",
  props: {
    modelValue: null,
  },

  emits: ["update:modelValue"],

  components: {
    BasicModal,
    ExperienceHeadlineInput,
  },
  data() {
    return {
      show: false,
      headline: null,
      message: null,
    };
  },

  mounted() {
    this.headline = this.modelValue;
  },
  methods: {
    openModal() {
      this.show = true;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updateHeadline() {
      this.message = null;
      let validateError = this.$refs.headlineInput.validate();
      if (validateError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updateExperienceHeadline(this.headline)
          .then((response) => {
            this.headline = response.data.headline;
            this.message = "new headline is:" + this.headline;
            this.$emit("update:modelValue", this.headline);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>


<style scoped>
</style>
