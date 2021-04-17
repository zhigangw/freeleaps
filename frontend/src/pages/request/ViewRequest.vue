<template>
  <div class="lf-board-container  mt-5">
    <request-view-template class="lf-body-content" />
    <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
    <div class="lf-submit-container">
      <button class="if-cancel" type="button" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
import RequestViewTemplate from "./RequestViewTemplate";
import { requestPostUtils } from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "PostRequestReview",
  props: {},

  computed: {},
  data() {
    return {
      request: requestPostUtils.fetchRequest()
        ? requestPostUtils.fetchRequest()
        : requestPostSkeleton,
      errorMessage: null,
    };
  },
  components: {
    RequestViewTemplate,
  },
  created() {},
  mounted() {},
  methods: {
    hasError() {
      return this.errorMessage;
    },

    goBack() {
      requestPostUtils.fillRequest(this.request);
      this.mnx_goBack();
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
