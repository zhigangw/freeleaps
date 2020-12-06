<template>
  <div>
    <div>
      <h3>work</h3>
      <table>
        <tr>
          <td>
            <label-button :name="'Username:'" :value="username" @click="updateUsername"/>
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
import  LabelButton from "../../components/buttons/templates/LabelButton";

export default {
  name: "FrontDoor",
  props: {},
  components: {
    LabelButton,
  },

  data() {
    return {
      username: "zhigangw"
    };
  },

  created() {},
  mounted() {},
  methods: {
    updateUsername(){
      console.log("updateUsername clicked");
    },
    gotoBuyerRegister() {
      this.mnx_navToUserSignup(userRoleEnum.BUYER);
    },

    gotoSellerRegister() {
      this.mnx_navToUserSignup(userRoleEnum.SELLER);
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
