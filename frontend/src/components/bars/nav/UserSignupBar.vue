<template>
  <header>
    <img class="img-freeleaps-logo" alt="freeleaps logo" src="../../../assets/logo.png" />
    <nav>
      <ul>
        <li>
          <p>Welcome to freeleaps</p>
        </li>
        <li>
          <loginout-button />
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import LoginoutButton from "../../buttons/user/LoginoutButton";

export default {
  name: "UserSignupBar",
  components: { LoginoutButton },
  computed: {
  },
  methods: {},
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
.img-freeleaps-logo {
  float: left;
  height: 70%;
  margin: 15px;
  background: #555;
}
</style>