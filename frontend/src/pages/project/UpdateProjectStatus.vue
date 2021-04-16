<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Project Status</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateProjectStatus">
            <div class="input-group mb-5">
              <select class="form-select" aria-label="project status" v-model="project.status">
                <option value="0">Ongoing</option>
                <option value="1">Delivered</option>
                <option value="2">Blocked</option>
              </select>
            </div>
            <div class="input-group">
              <button class="form-submit" type="button" @click="goBack">Cancel</button>
              <button class="form-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  requestPostUtils,
  OIDUtils,
  PojectManagerApi,
} from "../../utils/index";

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
    updateProjectStatus() {
      PojectManagerApi.updateStatus(OIDUtils.FromJson(this.project), this.project.status)
        .then((response) => {
          response;
          requestPostUtils.fillProject(this.project);
          this.mnx_navToProjectStatusUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    goBack() {
      this.mnx_goBack();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
