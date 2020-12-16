<template>
  <div>
    <account-settings />
    <work-settings />
    <personal-settings/>
    <career-settings/>
  </div>
</template>

<script>
import AccountSettings from "../../components/divs/user/AccountSettings";
import WorkSettings from "../../components/divs/user/WorkSettings";
import PersonalSettings from "../../components/divs/user/PersonalSettings";
import CareerSettings from "../../components/divs/user/CareerSettings";

export default {
  name: "UserSettings",
  props: {},
  components: {
    AccountSettings,
    WorkSettings,
    PersonalSettings,
    CareerSettings
  },

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
