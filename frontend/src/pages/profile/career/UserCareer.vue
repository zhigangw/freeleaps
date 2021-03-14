<template>
  <div class="main-body">
    <div class="story-board">
      <p class="callout">Career Profile</p>
      <div class="form-group border-0">
        <div class="input-group-div">
          <p class="input-label">Headline:</p>
          <p class="headline-text" @click="updateHeadline">{{headline}}</p>
        </div>
        <div class="input-group-div">
          <p class="input-label">Highlight:</p>
          <p class="highlight-text" @click="updateHighlight">{{highlight}}</p>
        </div>
        <div class="input-group-div">
          <p class="input-label">Experience:</p>
          <div class="periods-div">
            <div class="period-div" v-for="(period, index)  in periods" :key="index">
              <p class="period-headline">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#collapse'+index"
                  aria-expanded="false"
                  :aria-controls="'collapse'+index"
                >{{formPeriodHeadline(period)}}</button>
              </p>
              <div :id="'collapse'+index" class="accordion-collapse collapse">
                <p
                  class="period-description"
                  @click="clickOnPeriod($event,period)"
                >{{period.description}}</p>
              </div>
            </div>
            <div>
              <button class="period-add" @click="clickOnAdd">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UserProfileApi,
  userProfileUtils,
  DateUtils,
} from "../../../utils/index";

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
            this.periods.forEach((period) => {
              period.startDate = DateUtils.FromJsonToString(period.startDate);
              period.endDate = DateUtils.FromJsonToString(period.endDate);
            });
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

    formDate(date) {
      if (date) {
        return date.getMonth() + 1 + "/" + date.getFullYear();
      } else {
        return "n/a";
      }
    },

    formPeriodHeadlinePeriod(perioid) {
      return (
        this.formDate(new Date(perioid.startDate)) +
        " - " +
        this.formDate(new Date(perioid.endDate))
      );
    },

    formPeriodHeadline(perioid) {
      return (
        perioid.headline +
        "@" +
        perioid.orgnization +
        "  " +
        this.formPeriodHeadlinePeriod(perioid)
      );
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

    updatePeriod(period) {
      userProfileUtils.fillPeriod(period);
      this.mnx_navToUpdatePeriod();
    },

    clickOnPeriod(event, period) {
      event;
      this.updatePeriod(period);
    },

    clickOnAdd() {
      this.updatePeriod(null);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .my-3;
  @extend .px-1;
  @extend .border;
}

.input-label {
  @extend .lableText;
}

.add-experience-button {
  @extend .btn;
  @extend .btn-link;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}

.content-text {
  @extend .text-wrap;
  @extend .text-start;
  @extend .my-1;
  cursor: pointer;
}
.headline-text {
  @extend .content-text;
}
.highlight-text {
  @extend .content-text;
}

.periods-div {
  @extend .accordion!optional;
  @extend .align-items-start;
}

.period-div {
  @extend .accordion-item;
  @extend .w-100;
  @extend .align-items-start;
  @extend .border;
  @extend .my-3;
  cursor: pointer;
}

.period-headline {
  @extend .accordion-header;
  @extend .w-100;
  @extend .text-start;
  @extend .border-0;
}

.period-description {
  @extend .accordion-body;
  @extend .w-100;
  @extend .border-0;
  @extend .text-start;
  cursor: pointer;
  white-space: pre-wrap;
}

.period-add {
  @extend .form-submit;
  @extend .mt-5;
}
</style>
