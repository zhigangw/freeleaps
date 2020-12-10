<template>
  <div>
    <h3>personal</h3>
    <table>
      <tr>
        <td>
          <label-button :name="'Name:'" :value="name" @click="updatename" />
        </td>
      </tr>
    </table>
    <update-name-modal ref="updateUsernameModal" @updated="onNameUpdated" />
  </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi } from "../../../utils/index";
import UpdateNameModal from "../../modals/user/UpdateNameModal";

export default {
  name: "PersonalSettings",
  props: {},
  components: {
    LabelButton,
    UpdateNameModal,
  },

  data() {
    return {
      personal: {
        firstName: "",
        lastName: "",
      },
      name: null,
    };
  },

  created() {},
  mounted() {
    this.fetchUserPersonal();
  },
  methods: {
    updatename() {
      this.name = this.personal.firstName + " " + this.personal.lastName;
      this.$refs.updateUsernameModal.openModal(
        this.personal.firstName,
        this.personal.lastName
      );
    },
    onNameUpdated(firstName, lastName) {
      this.personal.firstName = firstName;
      this.personal.lastName = lastName;
      this.name = this.personal.firstName + " " + this.personal.lastName;
    },

    async fetchUserPersonal() {
      UserProfileApi.fetchPersonal()
        .then((response) => {
          if (response.data) {
            this.personal = response.data;
          }
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
