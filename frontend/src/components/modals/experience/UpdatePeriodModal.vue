<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Headline</h3>
    </template>
    <template #body>
      <label for="startDate">From:</label>
      <input id="startDate" type="date" v-model="startDate" />
      <label for="endDate">To:</label>
      <input id="endDate" type="date" v-model="endDate" />
      <experience-headline-input ref="experienceHeadline" :label="'Headline'" v-model="headline" />
      <experience-description-input
        ref="experienceDescription"
        :label="'Details'"
        v-model="description"
      />
    </template>
    <template #footer>
      <button @click="updatePeriod">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import ExperienceHeadlineInput from "../../inputs/experience/HeadlineInput";
import ExperienceDescriptionInput from "../../inputs/experience/DescriptionInput";
import { CareerProfileApi } from "../../../utils/index";

export default {
  name: "UpdateExperiencePeriodModal",
  props: {
    modelValue: null,
  },

  emits: ["update:modelValue"],

  components: {
    BasicModal,
    ExperienceHeadlineInput,
    ExperienceDescriptionInput,
  },
  data() {
    return {
      message: null,
      show: false,
      period: null,
      periodId: null,
      startDate: null,
      endDate: null,
      headline: null,
      description: null,
    };
  },

  mounted() {},
  watch: {
    period: function (val) {
      if (val) {
        this.startDate = val.startDate;
        this.endDate = val.endDate;
        this.headline = val.headline;
        this.description = val.description;
      }
    },

    startDate: function (val) {
      this.period.startDate = val;
    },
    endDate: function (val) {
      this.period.endDate = val;
    },
    headline: function (val) {
      this.period.headline = val;
    },
    description: function (val) {
      this.period.description = val;
    },
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.period = val ? val : {};
      },
    },
  },
  methods: {
    openModal() {
      this.show = true;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updatePeriodByResponse(response) {
      this.period = response.data.period;
      CareerProfileApi.formalize(this.period);

      this.$emit("update:modelValue", this.period);
    },

    updatePeriod() {
      this.message = null;
      if (!this.startDate) {
        this.message = "Please provide start date.";
        return;
      }
      if (!this.endDate) {
        this.message = "Please provide end date.";
        return;
      }
      let validateError1 = this.$refs.experienceHeadline.validate();
      let validateError2 = this.$refs.experienceDescription.validate();
      if (validateError1 || validateError2) {
        this.message = "Please fix the errors before submit";
        return;
      }

      CareerProfileApi.updateExperiencePeriod(this.period)
        .then((response) => {
          this.updatePeriodByResponse(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
</style>
