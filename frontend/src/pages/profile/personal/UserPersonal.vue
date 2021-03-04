<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Personal</p>
        <div class="form-group border-0">
          <div class="input-group-div">
            <span class="input-label" id="photo-input">Photo</span>
            <button
              class="input-img-button"
              type="button"
              aria-label="photo"
              aria-describedby="photo-input"
              @click="gotoUpdatePhoto"
            ><img class="user-photo" :src="photo"/></button>
          </div>
          <div class="input-group-div">
            <span class="input-label" id="name-input">Name</span>
            <button
              class="input-link-button"
              type="button"
              aria-label="name"
              aria-describedby="name-input"
              @click="gotoUpdateName"
            >{{firstName}} {{lastName}}</button>
          </div>
          <div class="input-group-div">
            <span class="input-label" id="location-input">Location</span>
            <button
              class="input-link-button"
              type="button"
              aria-label="location"
              aria-describedby="location-input"
              @click="gotoUpdateLocation"
            >{{email}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UserPersonal",
  props: {},

  data() {
    return {
      firstName: "not",
      lastName: "set",
      photo: require('@/assets/default-user-photo.svg'),
      location: "not set",
      personalProfile: {},
    };
  },

  created() {},
  mounted() {
    this.fetchPersonal();
  },
  methods: {
    populatePersonalData() {
      if (this.personalProfile) {
        if ("firstName" in this.personalProfile && this.personalProfile.firstName) {
          this.firstName = this.personalProfile.firstName;
        }
        if ("lastName" in this.personalProfile && this.personalProfile.lastName) {
          this.lastName = this.personalProfile.lastName;
        }
        if ("photo" in this.personalProfile && this.personalProfile.photo) {
          this.photo = this.personalProfile.photo;
        }
        if ("location" in this.personalProfile && this.personalProfile.location) {
          this.location = this.personalProfile.location;
        }
      }
    },
    async fetchPersonal() {
      UserProfileApi.fetchPersonal()
        .then((response) => {
          this.personalProfile = response.data;
          this.populatePersonalData();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    gotoUpdateName() {
      this.mnx_navToUpdateName(this.firstName, this.lastName);
    },

    gotoUpdatePhoto() {
      this.mnx_navToUpdatePhoto();
    },

    gotoUpdateLocation() {
      this.mnx_navToUpdateLocation(this.email);
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .input-group;
  @extend .my-3;
}

.input-label {
  @extend .h-90;
  @extend .w-25;
  @extend .text-start;
}

.input-link-button {
  @extend .btn;
  @extend .btn-link;
  @extend .form-control;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}

.input-img-button {
  @extend .btn;
  @extend .btn-link;
  @extend .form-control;
}

.user-photo{
    max-width: 64px;
    max-height: 64px;
}
</style>
