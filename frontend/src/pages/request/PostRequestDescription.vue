<template>
  <div class="comp-body">
    <form @submit.prevent="submitForm">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <h3 class="lf-head-title">Description</h3>
          <h6 class="lf-head-subtitle">Step 1 of 3</h6>
        </div>
        <div class="lf-head-right">
          <p class="lf-head-notes">
            - This will become part of the contract.
            <br />- Clear description of your project will help promote the visibility
          </p>
        </div>
      </div>
      <div class="lf-body-container">
        <div class="lf-body-content">
          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="problem-statement">Problem Statement(as the title)</h5>
            <p
              class="lf-body-item-label-note"
            >A couple of sentences about the problem the project is about to resolve. (50~200 words)</p>
            <textarea
              class="lf-body-item-textarea"
              id="problem-statement"
              placeholder="Examples: 
1) Build a e-commerce website following the spec and UI design.
2) Design a logo for my new mobile app.
3) Write a product spec for a e-commerce website"
              v-model.trim="description.problemStatement"
            />
          </div>
          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="deliverables">Deliverables</h5>
            <p
              class="lf-body-item-label-note"
            >What are the deliverables of the project. (50~200 words)</p>
            <textarea
              class="lf-body-item-textarea"
              id="deliverables"
              placeholder="Examples: 
1) A log with decryptions on how it means
2) A uprunning website hosted in a cloud platform, along with the Java source code and design docs for the website.
3) A product spec for a e-commerce website"
              v-model.trim="description.deliverables"
            />
          </div>

          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="criteria">Criteria</h5>
            <p class="lf-body-item-label-note">The exit criteria of the project (50~200 words)</p>
            <textarea
              class="lf-body-item-textarea"
              id="criteria"
              placeholder="Examples: 
1) The log needs to meet our requirement
2) The website need to pass our test; The source code need to meet the guidance. 
3)The product spec need to passed our review and get signed off by us"
              v-model.trim="description.criteria"
            />
          </div>
          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="appendix">Appendix</h5>
            <p class="lf-body-item-label-note">Upload your appendix</p>
          </div>
        </div>
      </div>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "PostRequestDescription",
  props: {
    requestId: null,
  },

  data() {
    return {
      localRequestId: null,
      description: requestPostSkeleton.description,
    };
  },

  created() {},
  mounted() {
    this.localRequestId = this.requestId;
    this.fetchLocalStoredDescription();
  },
  methods: {
    goNext() {
      this.mnx_navToPostRequestNote(this.localRequestId);
    },
    async fetchLocalStoredDescription() {
      if (
        this.localRequestId != null &&
        this.localRequestId != "null" &&
        this.localRequestId == requestPostUtils.fetchRequestId()
      ) {
        this.description = requestPostUtils.fetchDescription();
      }
    },

    async fetchDescription() {
      if (this.localRequestId != null) {
        RequestPostApi.fetchDescription(this.localRequestId)
          .then((response) => {
            this.description = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async submitForm() {
      RequestPostApi.fillDescription(this.localRequestId, this.description)
        .then((response) => {
          this.localRequestId = response.data.requestId;
          requestPostUtils.fillRequestId(this.localRequestId);
          requestPostUtils.fillDescription(this.description);
          this.goNext();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comp-body {
  @extend .lf-board-container;
}
</style>
