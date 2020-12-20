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
  name: "UpdateExperienceHeadlineModal",
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
      show: false,
      period:null,
      periodId=null,
      startDate: null,
      endDate: null,
      headline: null,
      description: null,
    };
  },

  mounted() {
    this.period = this.modelValue;
  },
    watch:{
        period:function(val){
            this.startDate = val.startDate;
            this.endDate = val.endDate;
            this.headline = val.headline;
            this.description = val.description;
            this.periodId=val.periodId;
        },
      periodId:function(val){
          this.period.periodId = val;
      },
      startDate: function(val){
          this.period.startDate=val;
      },
      endDate: function(val){
          this.period.endDate=val;
      },
      headline: function(val){
          this.period.headline=val;
      },
      description: function(val){
          this.period.description=val;
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

    updatePeriod() {
      this.message = null;
      let validateError1 = this.$refs.experienceHeadline.validate();
      let validateError2 = this.$refs.experienceDescription.validate();
      if (validateError && validateError2) {
        this.message = "Please fix the errors before submit";
      } else {
          if(this.periodId){
        CareerProfileApi.updateExperiencePeriod(this.periodId, this.period)
          .then((response) => {
            this.headline = response.data.headline;
            this.message = "new headline is:" + this.headline;
            this.$emit("update:modelValue", this.headline);
          })
          .catch((error) => {
            console.log(error);
          });
          }
          else{
        CareerProfileApi.addExperiencePeriod(this.period)
          .then((response) => {
            this.headline = response.data.headline;
            this.message = "new headline is:" + this.headline;
            this.$emit("update:modelValue", this.headline);
          })
          .catch((error) => {
            console.log(error);
          });
          }
      }
    },
  },
};
</script>


<style scoped>
</style>
