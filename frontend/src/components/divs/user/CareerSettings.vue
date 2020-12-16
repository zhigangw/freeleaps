<template>
  <div>
    <h3>career</h3>
    <table>
      <tr>
        <td>
          <label-button :name="'Prefered Role:'" :value="career.jobRole" @click="updateJobRole" />
        </td>
        <td>
          <label-button
            :name="'Experience:'"
            :value="career.experience.title"
            @click="updateExperience"
          />
        </td>
      </tr>
    </table>
    <update-job-role-modal ref="updateJobRoleModal" @updated="onJobRoleUpdated" />
  </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi } from "../../../utils/index";
import UpdateJobRoleModal from "../../modals/user/UpdateJobRoleModal";

export default {
  name: "CareerSettings",
  props: {},
  components: {
    LabelButton,
    UpdateJobRoleModal,
  },

  data() {
    return {
      career: {
        experience:{

        }
      },
    };
  },

  created() {},
  mounted() {
    this.fetchUserCareer();
  },
  methods: {
    updateExperience(){

    },
    updateJobRole() {
      this.$refs.updateJobRoleModal.openModal(this.career.jobRole);
    },

    onJobRoleUpdated(jobRole) {
      this.career.jobRole = jobRole;
    },

    async fetchUserCareer() {
      UserProfileApi.fetchCareer()
        .then((response) => {
          this.account = response.data;
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
