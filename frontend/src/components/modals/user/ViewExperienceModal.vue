<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Experience</h3>
    </template>
    <template #body>
      <label-text-reader
        ref="headline"
        v-model="headline"
        :label="'Headline:'"
        @edit="updateHeadline"
      />
      <label-text-reader
        ref="highlight"
        v-model="highlight"
        :label="'Highlight:'"
        @edit="updateHighlight"
      />
      <update-experience-headline-modal ref="updateHeadlineModal" v-model="headline" />
      <update-experience-highlight-modal ref="updateHighlightModal" v-model="highlight" />
    </template>
    <template #footer>
      <button @click="doneView">Done</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import LabelTextReader from "../../inputs/infra/LabelTextReader";
import UpdateExperienceHeadlineModal from "./UpdateExperienceHeadlineModal";
import UpdateExperienceHighlightModal from "./UpdateExperienceHighlightModal";

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
    LabelTextReader,
    UpdateExperienceHeadlineModal,
    UpdateExperienceHighlightModal,
  },
  data() {
    return {
      message: null,
      show: false,
      headline: null,
      highlight: null,
      experience: {},
    };
  },

  mounted() {
    this.experience = this.modelValue;
  },

  watch: {
    headline: function (val) {
      this.experience.headline = val;
    },

    highlight: function (val) {
      this.experience.highlight = val;
    },

    experience: function (val) {
      this.headline = val.headline;
      this.highlight = val.highlight;
    },
  },
  methods: {
    openModal(experience) {
      this.show = true;
      this.experience = experience;
      this.$refs.basicModal.openModal();
    },

    modalClosed() {
      this.show = false;
    },

    updateHeadline() {
      this.$refs.updateHeadlineModal.openModal();
    },

    updateHighlight() {
      this.$refs.updateHighlightModal.openModal();
    },

    doneView() {
      this.$refs.basicModal.closeModal();
    },
  },
};
</script>


<style scoped>
</style>
