<template>
  <div>
    <div>
      <h3>work</h3>
      <table>
        <tr>
          <td>
            <label-button
              :name="'Username:'"
              :value="user.account.identity"
              @click="updateUsername"
            />
          </td>
        </tr>
      </table>
    </div>
    <button @click="gotoBuyerRegister">Become Buyer</button>
    <button @click="gotoSellerRegister">Become Seller</button>
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";
import LabelButton from "../../components/buttons/templates/LabelButton";
import { UserProfileApi } from "../../utils/index";

export default {
  name: "UserSettings",
  props: {},
  components: {
    LabelButton,
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
      console.log("updateUsername clicked");
    },
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
