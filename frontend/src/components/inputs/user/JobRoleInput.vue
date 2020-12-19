<template>
  <label-select-input
    ref="labelSelectInput"
    :title="jobRoleFormatMessage"
    :label="label"
    v-model="jobRole"
    :options="jobRoles"
  />
</template>
<script>
import LabelSelectInput from "../templates/LabelSelectInput";
import { /*userProfileValidator,*/ CareerApi } from "../../../utils/index";

export default {
  name: "JobRoleInput",
  props: {
    label: null,
  },
  components: {
    LabelSelectInput,
  },
  data() {
    return {
      jobRole: null,
      jobRoles: [],
      jobRoleFormatMessage: null,
    };
  },

  created() {
    this.fetchRoles();
  },
  mounted() {},
  methods: {
    validate() {
      return null;
    },

    async fetchRoles() {
      CareerApi.fetchJobRoles()
        .then((response) => {
          this.jobRoles = response.data;
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
