<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Photo</h3>
    </template>
    <template #body>
      <photo-input
        ref="photoInput"
        v-model="photo"
        :height="'100'"
        :wight="'100'"
      />
    </template>
    <template #footer>
      <button @click="updatePhoto">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import PhotoInput from "../../inputs/user/PhotoInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdatePhotoModal",
  props: {},
  emits: {
    updated: function (photo) {
      return photo != undefined;
    },
  },
  components: {
    BasicModal,
    PhotoInput,
  },
  data() {
    return {
      show: false,
      photo: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(photo) {
      this.show = true;
      this.photo = photo;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updatePhoto() {
      this.message = null;
      let validateMobileError = this.$refs.photoInput.validate();
      if (validateMobileError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updatePhoto(this.photo)
          .then((response) => {
            this.photo = response.data.photo;
            this.$emit("updated", this.photo);
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
