<template>
  <project-updated-template>
    <template
      #result
    >Project due date is updated to {{getFormalizedDate(project.trackStatus.dueDate)}}</template>
  </project-updated-template>
</template>

<script>
import ProjectUpdatedTemplate from "./ProjectUpdatedTemplate";
import { requestPostUtils, DateUtils } from "../../utils/index";
export default {
  name: "ProjectDueUpdated",
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
