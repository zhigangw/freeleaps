<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Highlight</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateHighlight">
            <div class="input-group-div">
              <textarea
                class="control-text"
                v-model="highlight"
                placeholder="A couple of sentences about your achievement which you think will impress people"
                aria-label="highlight"
                aria-describedby="highlight-input"
              />
            </div>
            <div class="input-group-div">
              <button class="input-highlight-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-highlight-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  userProfileValidator,
  CareerProfileApi,
  userProfileUtils,
} from "../../../utils/index";

export default {
  name: "UpdateHighlight",
  props: {},

  data() {
    return {
      highlight: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.highlight = userProfileUtils.fetchHighlight();
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateHighlight() {
      this.errorMessage = userProfileValidator.highlightValidator.validate(
        this.highlight
      );

      if (this.hasError()) {
        return;
      }

      CareerProfileApi.updateExperienceHighlight(this.highlight)
        .then((response) => {
          response;
          userProfileUtils.fillHighlight(this.highlight);
          this.mnx_navToHighlightUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    goBack() {
      this.mnx_goBack();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .input-group;
  @extend .my-5;
}

.control-text {
  @extend .form-control;
  @extend .text-wrap;
}

.input-highlight-submit {
  @extend .form-submit;
}
.input-highlight-cancel {
  @extend .form-cancel;
}
</style>
