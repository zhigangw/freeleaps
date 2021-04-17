<template>
  <project-updated-template>
    <template #result>Project Status is updated to {{getFormalizedStatus(project.status)}}</template>
  </project-updated-template>
</template>

<script>
import ProjectUpdatedTemplate from "./ProjectUpdatedTemplate";
import { requestPostUtils } from "../../utils/index";
import { ProjectData } from "../../types/index";
export default {
  name: "ProjectUpdateTemplate",
  props: {},

  data() {
    return {
      project: requestPostUtils.fetchProject(),
    };
  },

  components: { ProjectUpdatedTemplate },

  created() {},
  mounted() {},
  methods: {
    getFormalizedStatus(status) {
      return ProjectData.getStatusString(status);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
