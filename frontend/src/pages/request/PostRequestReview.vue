<template>
  <div class="lf-board-container">
    <form @submit.prevent="submitForm">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <h3 class="lf-head-title">Preview</h3>
          <h6 class="lf-head-subtitle">Step 3 of 3</h6>
        </div>
        <div class="lf-head-right">
          <p class="lf-head-notes">
            - More budget will bring more attractions from talents.
            <br />- More escorted deposit will be more security to the freelancers.
          </p>
        </div>
      </div>
      <request-view-template class="lf-body-content" />
      <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
      <div v-if="requestInDraft" class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Back</button>
        <button class="if-submit" type="button" @click="postRequest">Post Now</button>
      </div>
      <div v-if="!requestInDraft" class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import RequestViewTemplate from "./RequestViewTemplate";
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostStatusEnum } from "../../types/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "PostRequestReview",
  props: {},

  computed: {
    requestInDraft() {
      return this.request.status === requestPostStatusEnum.DRAFT;
    },
  },
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

    async postRequest() {
      RequestPostApi.fillStatus(
        this.request.requestId,
        requestPostStatusEnum.PUBLISHED
      )
        .then((response) => {
          response;
          requestPostUtils.fillRequest(this.request);
          this.mnx_navToWorkplace();
        })
        .catch((error) => {
          console.log(error);
        });
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
