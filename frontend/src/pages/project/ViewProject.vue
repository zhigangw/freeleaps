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
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Status</h4>
      <div class="lf-body-block-container-body">
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label" for="total-budget">Kick Off</h5>
          <p class="lf-body-item--block-text">{{getFormalizedDate(project.kickoffDate)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label" for="total-budget">Kick Off</h5>
          <p class="lf-body-item--block-text">{{getFormalizedDate(project.kickoffDate)}}</p>
        </div>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Pay</h4>
      <div class="lf-body-block-container-body"></div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Contract</h4>
      <div class="lf-body-block-container-body"></div>
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
