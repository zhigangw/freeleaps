<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Experience</h3>
    </template>
    <template #body>
      <label-button
        ref="headline"
        :value="experience.headline"
        :label="'Headline:'"
        @click="updateHeadline"
      />
      <label-button ref="highlight" :value="experience.highlight" :label="'Highlight:'" />
      <update-experience-headline-modal ref="updateHeadlineModal" v-model="headline" />
    </template>
    <template #footer>
      <button @click="doneView">Done</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import LabelButton from "../../buttons/templates/LabelButton";
import UpdateExperienceHeadlineModal from "./UpdateExperienceHeadlineModal";

export default {
  name: "ViewExperienceModal",
  props: {
    modelValue: {
      required: true,
    },
  },
  emits: ["update:modelValue"],
  components: {
    BasicModal,
    LabelButton,
    UpdateExperienceHeadlineModal,
  },
  data() {
    return {
      message: null,
      show: false,
      headline: null,
      experience: {},
    };
  },

  mounted() {
    this.experience = this.modelValue;
  },

  methods: {
    openModal(experience) {
      this.show = true;
      this.experience = experience;
      this.headline = this.experience.headline;
      this.$refs.basicModal.openModal();
    },

    modalClosed() {
      this.show = false;
      this.experience.headline = this.headline;
      this.$emit("update:modelValue", this.experience);
    },

    updateHeadline() {
      this.$refs.updateHeadlineModal.openModal();
    },

    doneView() {
      this.$refs.basicModal.closeModal();
    },
  },
};
</script>


<style scoped>
</style>
