<template>
  <div>
    <h1>UserSignin</h1>
    <form @submit.prevent="signIn">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import { BackendApi } from "../../utils/index";

export default {
  name: "UserSignin",
  props: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },

  created() {},
  mounted() {},
  methods: {
    signIn() {
      BackendApi.signin(this.email, this.password)
      .then(response =>{
      this.mnx_authenticatedUser();
      /*TODO: get the identity from backend */
      this.mnx_setUserSeller();
      this.mnx_navAfterSignedin();})
      .catch( (error) =>{
          console.log(error);
        }),

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
