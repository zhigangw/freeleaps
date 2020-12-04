<template>
  <div>
    <h1>User Signup</h1>
    <UserRegister :role="roleValue"></UserRegister>
    <input type="radio" id="buyer" value="2" v-model.number="role" />
    <label for="male">I want to post requests</label>
    <br />
    <input type="radio" id="seller" value="1" v-model.number="role" />
    <label for="female">I want to make money</label>
    <br />
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";
import UserRegister from "../../components/divs/user/UserRegister";

export default {
  name: "UserSignup",
  props: {
    startingRole: {
        type:String,
    },
  },
  components: { UserRegister },

  data() {
    return {
      role: userRoleEnum.NONE,
      roleValue:Number(this.role)
    };
  },

  created() {},
  mounted() {
    this.role = this.startingRole;
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
