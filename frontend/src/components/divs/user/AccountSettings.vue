<template>
    <div>
      <h3>account</h3>
      <table>
        <tr>
          <td>
            <label-button
              :name="'Username:'"
              :value="account.identity"
              @click="updateUsername"
            />
          </td>
          <td>
            <label-button :name="'password:'" :value="'******'" @click="updatePassword" />
          </td>
        </tr>
      </table>
    <update-username-modal ref="updateUsernameModal" @updated="onUsernameUpdated" />
    <update-password-modal ref="updatePasswordModal" @updated="onPasswordUpdated" />
    </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi } from "../../../utils/index";
import UpdateUsernameModal from "../../modals/user/UpdateUsernameModal";
import UpdatePasswordModal from "../../modals/user/UpdatePasswordModal";

export default {
  name: "AccountSettings",
  props: {},
  components: {
    LabelButton,
    UpdateUsernameModal,
    UpdatePasswordModal,
  },

  data() {
    return {
        account: {},
    };
  },

  created() {},
  mounted() {
    this.fetchUserAccount();
  },
  methods: {
    updateUsername() {
      this.$refs.updateUsernameModal.openModal(this.account.identity);
    },
    onUsernameUpdated(username) {
      this.account.identity = username;
    },

    updatePassword() {
      this.$refs.updatePasswordModal.openModal();
    },

    onPasswordUpdated() {},


    async fetchUserAccount() {
      UserProfileApi.fetchAccount()
        .then((response) => {
          this.account = response.data;
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
