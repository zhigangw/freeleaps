<template>
  <project-updated-template>
    <template
      #result
    >Project start date is updated to {{getFormalizedDate(project.trackStatus.kickoffDate)}}</template>
  </project-updated-template>
</template>

<script>
import ProjectUpdatedTemplate from "./ProjectUpdatedTemplate";
import { requestPostUtils, DateUtils } from "../../utils/index";
export default {
  name: "ProjectStartUpdated",
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
    getFormalizedDate(date) {
      return DateUtils.FromJsonToString(date);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
