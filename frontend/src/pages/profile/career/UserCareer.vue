<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Fill the career to gain more exposure and trust</p>
        <div class="form-group border-0">
          <div class="input-group-div">
            <span class="input-label" id="headline-input">Headline</span>
            <textarea
              class="control-text"
              v-model="headline"
              placeholder="What would you like people to call you, like, an experienced software engineer in IOT"
              readonly
              aria-label="headline"
              aria-describedby="headline-input"
              @click="updateHeadline"
            />
          </div>
          <div class="input-group-div">
            <span class="input-label" id="highlight-input">Highlight</span>
            <textarea
              class="control-text"
              v-model="highlight"
              placeholder="A couple of sentences about your achievement impress people"
              readonly
              aria-label="headline"
              aria-describedby="headline-input"
              @click="updateHighlight"
            />
          </div>
          <div class="input-group-div">
            <span class="input-label" id="experience-input">Experience</span>
            <div>
              <div v-for="period in periods" :key="period.id" @click="updatePeriod($event,period)">
                <span>From:</span>
                <span>{{period.startDate}}</span>
                <span>to:</span>
                <span>{{period.endDate}}</span>
                <span></span>
                <span>{{period.headline}}</span>
              </div>
              <div>
                <button class="add-experience-button">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="input-group-div">
          <span class="input-label" id="tags-input">Tags</span>
          <div>
            <span class="tag">new</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi, userProfileUtils } from "../../../utils/index";

export default {
  name: "UserPersonal",
  props: {},

  data() {
    return {
      headline: "",
      highlight: "",
      periods: [],
      careerProfile: {},
    };
  },

  created() {},
  mounted() {
    this.fetchCareer();
  },
  methods: {
    populateToProperties() {
      if (this.careerProfile) {
        if ("experience" in this.careerProfile) {
          if (
            "headline" in this.careerProfile.experience &&
            this.careerProfile.experience.headline
          ) {
            this.headline = this.careerProfile.experience.headline;
          }
          if (
            "highlight" in this.careerProfile.experience &&
            this.careerProfile.experience.highlight
          ) {
            this.highlight = this.careerProfile.experience.highlight;
          }
          if (
            "periods" in this.careerProfile.experience &&
            this.careerProfile.experience.periods
          ) {
            this.periods = this.careerProfile.experience.periods;
          }
        }
        if (
          "preferredRoles" in this.careerProfile &&
          this.careerProfile.preferredRoles
        ) {
          this.preferredRoles = this.careerProfile.preferredRoles;
        }
        if ("tags" in this.careerProfile && this.careerProfile.tags) {
          this.tags = this.careerProfile.tags;
        }
      }
    },
    async fetchCareer() {
      UserProfileApi.fetchCareer()
        .then((response) => {
          this.careerProfile = response.data;
          this.populateToProperties();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    updateHeadline() {
      userProfileUtils.fillHeadline(this.headline);
      this.mnx_navToUpdateHeadline();
    },

    updateHighlight() {
      userProfileUtils.fillHighlight(this.highlight);
      this.mnx_navToUpdateHighlight();
    },
    updatePeriod(event, period) {
      event;
      userProfileUtils.fillPeriod(period);
      this.mnx_navToUpdateLocation();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .input-group;
  @extend .my-5;
  @extend .align-items-center;
}

.input-label {
  @extend .input-group-text;
  @extend .mx-3;
}

.add-experience-button {
  @extend .btn;
  @extend .btn-link;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}

.control-text {
  @extend .form-control;
  @extend .text-wrap;
  cursor: pointer;
}

.highlight {
  @extend .form-control;
  @extend .text-wrap;
}
</style>
