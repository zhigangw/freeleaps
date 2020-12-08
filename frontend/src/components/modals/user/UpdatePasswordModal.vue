<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Password</h3>
    </template>
    <template #body>
      <password-input ref="passwordInput" v-model="password" :label="'new password:'" />
      <password-input ref="repeatInput" v-model="repeat" :label="'repeat password:'" />
    </template>
    <template #footer>
      <button @click="updatePassword">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import PasswordInput from "../../inputs/user/PasswordInput";
import { UserAuthApi } from "../../../utils/index";

export default {
  name: "UpdatePasswordModal",
  props: {},
  emits: {
    updated: function () {
      return true;
    },
  },
  components: {
    BasicModal,
    PasswordInput,
  },
  data() {
    return {
      show: false,
      password: null,
      repeat: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal() {
      this.show = true;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },
    updatePassword() {
      this.message = null;
      let validateError = this.$refs.passwordInput.validate();
      if (validateError) {
        this.message = "Please fix the errors before submit";
        return;
      }
      if (this.repeat != this.password) {
        this.message = "two type-in must be identical.";
        return;
      }

      UserAuthApi.updatePassword(this.password)
        .then((response) => {
          this.message = response.data.text;
          this.$emit("updated");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
</style>
