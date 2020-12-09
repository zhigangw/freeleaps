<template>
  <div>
    <account-settings/>
    <work-settings/>
    </div>
</template>

<script>
import AccountSettings from "../../components/divs/user/AccountSettings";
import WorkSettings from "../../components/divs/user/WorkSettings";

export default {
  name: "UserSettings",
  props: {},
  components: {
    AccountSettings,
    WorkSettings
  },

  data() {
    return {
    };
  },

  created() {},
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
