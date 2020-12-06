<template>
  <div>
    <div>
      <h3>work</h3>
      <table>
        <tr>
          <td>
            <Username :username="username" @click="updateUsername"/>
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
import  Username from "../../components/divs/user/Username";

export default {
  name: "FrontDoor",
  props: {},
  components: {
    Username,
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
