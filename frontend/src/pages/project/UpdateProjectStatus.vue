<template>
  <div class="row-flow-container">
    <div class="row-flow-header flex-wrap">
      <button class="btn btn-primary" @click="backToBrowseProject">Project list</button>
      <div class="w-80 mx-auto d-flex flex-wrap">
        <p class="flex-grow-1 text-start text-wrap">{{project.headline}}</p>
        <select
          class="form-select w-40 w-sm-25 w-lg-15 w-xl-10"
          aria-label="project status"
          v-model="project.status"
        >
          <option value="0">Ongoing</option>
          <option value="1">Delivered</option>
          <option value="2">Blocked</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { requestPostUtils, DateUtils } from "../../utils/index";

export default {
  name: "ViewProject",
  props: {},

  data() {
    return {
      project: requestPostUtils.fetchProject(),
    };
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    
    getFormalizedDate(date) {
      return DateUtils.FromJsonToString(date);
    },
    backToBrowseProjects() {
      requestPostUtils.fillProject(this.project);
      this.mnx_navToViewProject();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
