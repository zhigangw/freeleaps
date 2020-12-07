<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Username</h3>
    </template>
    <template #body>
      <username-input ref="usernameInput" v-model="username" :checkAvailability="true" />
    </template>
    <template #footer>
      <button @click="updateUsername">Update</button>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import UsernameInput from "../../inputs/user/UsernameInput";

export default {
  name: "UpdateUsernameModal",
  props: {
    quote: null,
  },
  components: {
    BasicModal,
    UsernameInput,
  },
  data() {
    return {
      show: false,
      username: null,
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
    updateUsername() {
      this.$refs.usernameInput.validate();
    },
  },
};
</script>


<style scoped>
</style>
