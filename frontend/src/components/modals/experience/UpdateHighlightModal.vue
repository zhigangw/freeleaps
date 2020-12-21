<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Highlight</h3>
    </template>
    <template #body>
      <experience-highlight-input
        ref="highlightInput"
        v-model="highlight"
        :label="'new highlight:'"
      />
    </template>
    <template #footer>
      <button @click="updateHighlight">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import ExperienceHighlightInput from "../../inputs/experience/HighlightInput";
import { CareerProfileApi } from "../../../utils/index";

export default {
  name: "UpdateExperienceHighlightModal",
  props: {
    modelValue: null,
  },

  emits: ["update:modelValue"],

  components: {
    BasicModal,
    ExperienceHighlightInput,
  },
  data() {
    return {
      show: false,
      highlight: null,
      message: null,
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.highlight = val;
      },
    },
    highlight: function (val) {
      this.$emit("update:modelValue", val);
    },
  },
  mounted() {},
  methods: {
    openModal() {
      this.show = true;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updateHighlight() {
      this.message = null;
      let validateError = this.$refs.highlightInput.validate();
      if (validateError) {
        this.message = "Please fix the errors before submit";
      } else {
        CareerProfileApi.updateExperienceHighlight(this.highlight)
          .then((response) => {
            this.highlight = response.data.highlight;
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
