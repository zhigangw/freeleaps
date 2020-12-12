<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Email</h3>
    </template>
    <template #body>
      <email-input ref="emailInput" v-model="email" :label="'new email:'" />
    </template>
    <template #footer>
      <button @click="updateEmail">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import EmailInput from "../../inputs/user/EmailInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdateEmailModal",
  props: {},
  emits: {
    updated: function (email) {
      return email != undefined;
    },
  },

  components: {
    BasicModal,
    EmailInput,
  },

  data() {
    return {
      show: false,
      email: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(email) {
      this.show = true;
      this.email = email;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updateEmail() {
      this.message = null;
      let validateMobileError = this.$refs.emailInput.validate();
      if (validateMobileError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updateEmail(this.email)
          .then((response) => {
            this.email = response.data.email;
            this.message = "new email is:" + this.email;
            this.$emit("updated", this.email);
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
