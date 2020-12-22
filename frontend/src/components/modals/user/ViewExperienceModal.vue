<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>View Experience Panel</h3>
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
      <ExperiencePannel @add="addExperiencePeriod" @edit="editExperiencePeriod" :periods="periods" />
      <update-experience-headline-modal ref="updateHeadlineModal" v-model="headline" />
      <update-experience-highlight-modal ref="updateHighlightModal" v-model="highlight" />
      <update-experience-period-modal ref="updatePeriodModal" v-model="periodInEdit" />
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
import UpdateExperienceHeadlineModal from "../experience/UpdateHeadlineModal";
import UpdateExperienceHighlightModal from "../experience/UpdateHighlightModal";
import UpdateExperiencePeriodModal from "../experience/UpdatePeriodModal";
import ExperiencePannel from "../../divs/experience/ExperiencePanel";

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
    UpdateExperiencePeriodModal,
    ExperiencePannel,
  },
  data() {
    return {
      message: null,
      show: false,
      headline: null,
      highlight: null,
      periods: null,
      periodInEdit: null,
      experience: {},
    };
  },

  mounted() {},

  watch: {
    headline: function (val) {
      this.experience.headline = val;
    },

    highlight: function (val) {
      this.experience.highlight = val;
    },

    periods: function (val) {
      this.experience.periods = val;
    },

    experience: function (val) {
      this.headline = val.headline;
      this.highlight = val.highlight;
      this.periods = val.periods;
    },
    periodInEdit: function (val, old) {
      if (!old) {
        this.periods.push(val);
      }
    },
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.experience = val ? val : {};
      },
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

    addExperiencePeriod() {
      this.$refs.updatePeriodModal.openModal();
    },

    editExperiencePeriod(period) {
      this.periodInEdit = period;
      this.$refs.updatePeriodModal.openModal();
    },

    doneView() {
      this.$refs.basicModal.closeModal();
    },
  },
};
</script>


<style scoped>
</style>
