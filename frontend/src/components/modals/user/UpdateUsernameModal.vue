<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Username</h3>
    </template>
    <template #body>
      <h3>Current:{{current}}</h3>
      <username-input
        ref="usernameInput"
        v-model="username"
        :checkAvailability="true"
        :label="'new username:'"
      />
    </template>
    <template #footer>
      <button @click="updateUsername">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import UsernameInput from "../../inputs/user/UsernameInput";
import { UserAuthApi } from "../../../utils/index";

export default {
  name: "UpdateUsernameModal",
  props: {},
  emits: {
    updated: function (username) {
      return username != undefined;
    },
  },
  components: {
    BasicModal,
    UsernameInput,
  },
  data() {
    return {
      show: false,
      username: null,
      current: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(username) {
      this.show = true;
      this.current = username;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },
    updateUsername() {
      this.message = null;
      let validateError = this.$refs.usernameInput.validate();
      if (validateError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserAuthApi.updateUsername(this.username)
          .then((response) => {
            this.username = response.data.identity;
            this.message = "new username is:" + this.username;
            this.$emit("updated", this.username);
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
