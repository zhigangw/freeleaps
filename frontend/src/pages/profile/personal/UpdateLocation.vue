<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Location</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateLocation">
            <select class="select-location" v-model="newLocation">
              <option
                v-for="option in locations"
                :key="option.name"
                :value="option.name"
              >{{ option.name }}</option>
            </select>
            <div class="input-group-div">
              <button class="input-username-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-username-submit" type="submit">Submit</button>
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
  UserProfileApi,
  userProfileUtils,
  GeoLocationApi,
} from "../../../utils/index";

export default {
  name: "UpdateLocation",
  props: {},

  data() {
    return {
      location: null,
      newLocation: null,
      locations: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.location = userProfileUtils.fetchLocation();
    this.newLocation = this.location;
    this.fetchLocations();
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateLocation() {
      this.errorMessage = userProfileValidator.countryNameValidator.validate(
        this.newLocation
      );

      if (this.hasError()) {
        return;
      }

      UserProfileApi.updateLocation(this.newLocation)
        .then((response) => {
          response;
          userProfileUtils.fillLocation(this.newLocation);
          this.mnx_navToLocationUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    async fetchLocations() {
      GeoLocationApi.fetchCountries()
        .then((response) => {
          this.locations = response.data;
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

.select-location {
  @extend .form-group-item;
  @extend .form-select;
}
.input-username-submit {
  @extend .btn;
  @extend .btn-primary;
  @extend .w-30;
  @extend .mx-auto;
}
.input-username-cancel {
  @extend .btn;
  @extend .btn-secondary;
  @extend .w-30;
  @extend .mx-auto;
}
</style>
