<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Location</h3>
    </template>
    <template #body>
      <location-input ref="locationInput" v-model="location" :options="locations" />
    </template>
    <template #footer>
      <button @click="updateLocation">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import LocationInput from "../../inputs/user/LocationInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdateLocationModal",
  props: {},
  emits: {
    updated: function (location) {
      return location != undefined;
    },
  },

  components: {
    BasicModal,
    LocationInput,
  },

  data() {
    return {
      show: false,
      location: null,
      locations: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(location, locations) {
      this.show = true;
      this.location = location;
      this.locations = locations;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updateLocation() {
      this.message = null;
      let validateMobileError = this.$refs.locationInput.validate();
      if (validateMobileError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updateLocation(this.location)
          .then((response) => {
            this.location = response.data.location;
            this.message = "new location is:" + this.location;
            this.$emit("updated", this.location);
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
