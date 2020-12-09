<template>
  <div>
        <h3>work</h3>
        <table>
          <tr>
            <td>
              <label-button :name="'Email:'" :value="work.email" @click="openEmail" />
            </td>
            <td>
              
            </td>
          </tr>
        </table>
      </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "WorkSettings",
  props: {},
  components: {
    LabelButton,
  },

  data() {
    return {
        work:{}
    };
  },

  created() {},
  mounted() {
    this.fetchWorkProfile();
  },
  methods: {
    openEmail(){
      window.open();
    },
    async fetchWorkProfile() {
      UserProfileApi.fetchSettings()
        .then((response) => {
          this.work = response.data;
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
