<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Photo</p>
        <div class="form-group border-0">
          <form @submit.prevent="updatePhoto">
            <div class="input-group-div">
              <span class="input-label" id="photo-input">Photo</span>
              <button
                class="input-img-button"
                type="button"
                aria-label="newPhoto"
                aria-describedby="photo-input"
                @click="selectPhoto"
              >
                <img class="user-photo" :src="newPhoto" />
              </button>
              <input
                ref="fileInput"
                type="file"
                accept="image/png, image/jpeg"
                style="display:none"
                @change="onChange($event)"
              />
            </div>
            <div class="input-group-div">
              <button class="input-code-cancel" type="button" @click="goBack">Back</button>
              <button class="input-code-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileApi, userProfileUtils } from "../../../utils/index";

export default {
  name: "UpdatePhoto",
  props: {},

  data() {
    return {
      errorMessage: null,
      newPhoto: null,
      personalProfile: {},
    };
  },

  created() {},
  mounted() {
    this.newPhoto = userProfileUtils.fetchPhoto();
  },

  methods: {
    hasError() {
      return this.errorMessage != null;
    },
    selectPhoto() {
      this.$refs.fileInput.click();
    },
    onChange(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.newPhoto = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(file);
    },

    updatePhoto() {
      UserProfileApi.updatePhoto(this.newPhoto)
        .then((response) => {
          response;
          userProfileUtils.fillPhoto(this.newPhoto);
          this.mnx_navToPhotoUpdated();
        })
        .catch((error) => {
          console.log(error);
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
  @extend .align-items-center;
}

.input-label {
  @extend .h-90;
  @extend .w-25;
  @extend .text-start;
}

.input-link-button {
  @extend .btn;
  @extend .btn-link;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}

.input-img-button {
  @extend .btn;
  @extend .btn-link;
}

.user-photo {
  @include media-breakpoint-up(xs) {
    width: 12vw;
    height: 12vw;
  }
  @include media-breakpoint-up(sm) {
    width: 11vw;
    height: 11vw;
  }
  @include media-breakpoint-up(md) {
    width: 10vw;
    height: 10vw;
  }
  @include media-breakpoint-up(lg) {
    width: 9vw;
    height: 9vw;
  }
  @include media-breakpoint-up(xl) {
    width: 7.5vw;
    height: 7.5vw;
  }
  @include media-breakpoint-up(xxl) {
    width: 6vw;
    height: 6vw;
  }
}
</style>
