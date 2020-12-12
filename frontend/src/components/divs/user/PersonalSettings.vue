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
        <td>
          <label-button :name="'Email:'" :value="personal.email" @click="updateEmail" />
        </td>
      </tr>
      <tr>
      </tr>
    </table>
    <update-name-modal ref="updateUsernameModal" @updated="onNameUpdated" />
    <update-mobile-modal ref="updateMobileModal" @updated="onMobileUpdated" />
    <update-email-modal  ref="updateEmailModal" @updated="onEmailUpdated" />
  </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi } from "../../../utils/index";
import UpdateNameModal from "../../modals/user/UpdateNameModal";
import UpdateMobileModal from "../../modals/user/UpdateMobileModal";
import UpdateEmailModal from "../../modals/user/UpdateEmailModal";

export default {
  name: "PersonalSettings",
  props: {},
  components: {
    LabelButton,
    UpdateNameModal,
    UpdateMobileModal,
    UpdateEmailModal,
  },

  data() {
    return {
      personal: {
        firstName: "",
        lastName: "",
        mobile: "",
      },
      name: null,
    };
  },

  created() {},
  mounted() {
    this.fetchUserPersonal();
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
