<template>
  <div>
    <div>
      <h3>account</h3>
      <table>
        <tr>
          <td>
            <label-button
              :name="'Username:'"
              :value="user.account.identity"
              @click="updateUsername"
            />
          </td>
          <td>
            <label-button :name="'password:'" :value="'******'" @click="updatePassword" />
          </td>
        </tr>
      </table>
    </div>

    <button @click="gotoBuyerRegister">Become Buyer</button>
    <button @click="gotoSellerRegister">Become Seller</button>
    <update-username-modal ref="updateUsernameModal" @updated="onUsernameUpdated" />
    <update-password-modal ref="updatePasswordModal" @updated="onPasswordUpdated" />
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";
import LabelButton from "../../components/buttons/templates/LabelButton";
import { UserProfileApi } from "../../utils/index";
import UpdateUsernameModal from "../../components/modals/user/UpdateUsernameModal";
import UpdatePasswordModal from "../../components/modals/user/UpdatePasswordModal";

export default {
  name: "UserSettings",
  props: {},
  components: {
    LabelButton,
    UpdateUsernameModal,
    UpdatePasswordModal,
  },

  data() {
    return {
      user: {
        account: {},
        work: {},
        personal: {},
        career: {},
      },
    };
  },

  created() {},
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    updateUsername() {
      this.$refs.updateUsernameModal.openModal(this.user.account.identity);
    },
    onUsernameUpdated(username) {
      this.user.account.identity = username;
    },

    updatePassword() {
      this.$refs.updatePasswordModal.openModal();
    },

    onPasswordUpdated() {},

    gotoBuyerRegister() {
      this.mnx_navToUserSignup(userRoleEnum.BUYER);
    },

    gotoSellerRegister() {
      this.mnx_navToUserSignup(userRoleEnum.SELLER);
    },

    async fetchUserProfile() {
      UserProfileApi.fetchSettings()
        .then((response) => {
          this.user = response.data;
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
