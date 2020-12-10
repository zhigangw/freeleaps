<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Name</h3>
    </template>
    <template #body>
      <name-input ref="firstNameInput" v-model="firstName" :label="'new first name:'" />
      <name-input ref="lastNameInput" v-model="lastName" :label="'new last name:'" />
    </template>
    <template #footer>
      <button @click="updateName">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import NameInput from "../../inputs/user/NameInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdateNameModal",
  props: {},
  emits: {
    updated: function (firstName, lastName) {
      return firstName != undefined && lastName != undefined;
    },
  },
  components: {
    BasicModal,
    NameInput,
  },
  data() {
    return {
      show: false,
      firstName: null,
      lastName: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(firstName, lastName) {
      this.show = true;
      this.firstName = firstName;
      this.lastName = lastName;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },
    updateName() {
      this.message = null;
      let validateFirstNameError = this.$refs.firstNameInput.validate();
      let validateLastNameError = this.$refs.lastNameInput.validate();
      if (validateFirstNameError || validateLastNameError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updateName(this.firstName, this.lastName)
          .then((response) => {
            this.firstName = response.data.firstName;
            this.lastName = response.data.lastName;
            this.message =
              "new name is:" + this.firstName + " " + this.lastName;
            this.$emit("updated", this.firstName, this.lastName);
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
