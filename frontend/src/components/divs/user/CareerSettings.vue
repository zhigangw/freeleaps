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
            :value="career.experience.headline"
            @click="viewExperience"
          />
        </td>
      </tr>
    </table>
    <update-job-role-modal ref="updateJobRoleModal" @updated="onJobRoleUpdated" />
    <view-experience-modal ref="viewExperienceModal" v-model="career.experience" />
  </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi, CareerProfileApi } from "../../../utils/index";
import UpdateJobRoleModal from "../../modals/user/UpdateJobRoleModal";
import ViewExperienceModal from "../../modals/user/ViewExperienceModal";

export default {
  name: "CareerSettings",
  props: {},
  components: {
    LabelButton,
    UpdateJobRoleModal,
    ViewExperienceModal,
  },

  data() {
    return {
      career: {
        experience: {},
      },
    };
  },

  created() {},
  mounted() {
    this.fetchUserCareer();
  },
  methods: {
    viewExperience() {
      this.$refs.viewExperienceModal.openModal(this.career.experience);
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
          this.career = response.data;
          for (let p of this.career.experience.periods) {
            CareerProfileApi.formalize(p);
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
