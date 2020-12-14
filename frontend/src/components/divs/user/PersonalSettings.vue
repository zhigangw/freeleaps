<template>
  <div>
    <h3>personal</h3>
    <table>
      <tr>
        <td>
          <label-button :name="'Name:'" :value="name" @click="updateName" />
        </td>
        <td>
          <label-button :name="'Mobile:'" :value="personal.mobile" @click="updateMobile" />
        </td>
      </tr>
      <tr>
        <td>
          <label-button :name="'Email:'" :value="personal.email" @click="updateEmail" />
        </td>
      </tr>
      <tr>
        <td>
          <div @click="updatePhoto">
            <img width="50" height="60" :src="personal.photo" />
          </div>
        </td>
        <td>
          <label-button :name="'Location:'" :value="personal.location" @click="updateLocation"></label-button>
        </td>
      </tr>
    </table>
    <update-name-modal ref="updateUsernameModal" @updated="onNameUpdated" />
    <update-mobile-modal ref="updateMobileModal" @updated="onMobileUpdated" />
    <update-email-modal ref="updateEmailModal" @updated="onEmailUpdated" />
    <update-photo-modal ref="updatePhotoModal" @updated="onPhotoUpdated" />
    <update-location-modal ref="updateLocationModal" @updated="onLocationUpdated" />
  </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi, GeoLocationApi } from "../../../utils/index";
import UpdateNameModal from "../../modals/user/UpdateNameModal";
import UpdateMobileModal from "../../modals/user/UpdateMobileModal";
import UpdateEmailModal from "../../modals/user/UpdateEmailModal";
import UpdatePhotoModal from "../../modals/user/UpdatePhotoModal";
import UpdateLocationModal from "../../modals/user/UpdateLocationModal";

export default {
  name: "PersonalSettings",
  props: {},
  components: {
    LabelButton,
    UpdateNameModal,
    UpdateMobileModal,
    UpdateEmailModal,
    UpdatePhotoModal,
    UpdateLocationModal,
  },

  data() {
    return {
      personal: {
        firstName: "",
        lastName: "",
        mobile: "",
      },
      name: null,
      locations: null,
    };
  },

  created() {},
  mounted() {
    this.fetchUserPersonal();

    this.fetchLocations();
  },
  methods: {
    updateName() {
      this.name = this.personal.firstName + " " + this.personal.lastName;
      this.$refs.updateUsernameModal.openModal(
        this.personal.firstName,
        this.personal.lastName
      );
    },
    onNameUpdated(firstName, lastName) {
      this.personal.firstName = firstName;
      this.personal.lastName = lastName;
      this.name = this.personal.firstName + " " + this.personal.lastName;
    },

    updateMobile() {
      this.$refs.updateMobileModal.openModal(this.personal.mobile);
    },
    onMobileUpdated(mobile) {
      this.personal.mobile = mobile;
    },

    updateEmail() {
      this.$refs.updateEmailModal.openModal(this.personal.email);
    },
    onEmailUpdated(email) {
      this.personal.email = email;
    },

    updatePhoto() {
      this.$refs.updatePhotoModal.openModal(this.personal.photo);
    },

    onPhotoUpdated(photo) {
      this.personal.photo = photo;
    },

    updateLocation() {
      this.$refs.updateLocationModal.openModal(
        this.personal.location,
        this.locations
      );
    },

    onLocationUpdated(location) {
      this.personal.location = location;
    },

    async fetchUserPersonal() {
      UserProfileApi.fetchPersonal()
        .then((response) => {
          if (response.data) {
            this.personal = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchLocations() {
      GeoLocationApi.fetchCountries()
        .then((response) => {
          this.locations = response.data;
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
