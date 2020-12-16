<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Job Role</h3>
    </template>
    <template #body>
      <job-role-input ref="jobRoleInput" v-model="jobRole" :label="'new first name:'" />
    </template>
    <template #footer>
      <button @click="updateName">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import JobRoleInput from "../../inputs/user/JobRoleInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdateJobRoleModal",
  props: {},
  emits: {
    updated: function (jobRole) {
      return jobRole != undefined;
    },
  },
  components: {
    BasicModal,
    JobRoleInput,
  },
  data() {
    return {
      show: false,
      jobRole: null,
      message:null,
    };
  },

  mounted() {},
  methods: {
    openModal(jobRole) {
      this.show = true;
      this.jobRole = jobRole;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },

    updateName() {
      this.message = null;
      let validateError = this.$refs.jobRoleInput.validate();
      if (validateError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updateJobRole(this.jobRole)
          .then((response) => {
            this.jobRole = response.data.jobRole;
            this.message = "new role is:" + this.jobRole;
            this.$emit("updated", this.jobRole);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>


<style scoped>
</style>
