<template>
  <div class="row-flow-container">
    <div v-if="providedProjects.length > 0" class="w-100 border">
      <div
        class="row-flow-item-container"
        v-for="(project,index) in providedProjects"
        :key="index"
        @click="viewProject(project)"
      >
        <div class="row-flow-item-subject-area">
          <p class="row-flow-item-subject-text" style="cursor:pointer">{{project.headline}}</p>
        </div>
        <div class="row-flow-item-status-area">
          <p class="row-flow-item-status-text">{{getFormalizedStatus(project)}}</p>
        </div>
        <div class="row-flow-item-notes-area">
          <p class="row-flow-item-notes-text">{{getFormalizedDate(project)}}</p>
        </div>
      </div>
    </div>
    <div v-if="requestedProjects.length > 0" class="w-100 border">
      <div
        class="row-flow-item-container"
        v-for="(project,index) in requestedProjects"
        :key="index"
        @click="viewProject(project)"
      >
        <div class="row-flow-item-subject-area">
          <p class="row-flow-item-subject-text" style="cursor:pointer">({{project.headline}})</p>
        </div>
        <div class="row-flow-item-status-area">
          <p class="row-flow-item-status-text">{{getFormalizedStatus(project)}}</p>
        </div>
        <div class="row-flow-item-notes-area">
          <p class="row-flow-item-notes-text">{{getFormalizedDate(project)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PojectManagerApi,
  requestPostUtils,
  DateUtils,
} from "../../utils/index";

import { ProjectData } from "../../types/index";

export default {
  name: "WorkPlace",
  props: {},
  components: {},
  data() {
    return {
      providedProjects: [],
      requestedProjects: [],
    };
  },

  created() {},
  mounted() {
    this.fetchProvidedProjects();
    this.fetchRequestedProjects();
  },

  methods: {
    getFormalizedStatus(project) {
      return ProjectData.getStatusString(project.status);
    },
    getFormalizedDate(project) {
      return DateUtils.FromJsonToString(project.kickoffDate);
    },

    viewProject(project) {
      requestPostUtils.fillProject(project);
      this.mnx_navToViewProject();
    },

    async fetchProvidedProjects() {
      PojectManagerApi.fetchForProvider()
        .then((response) => {
          this.providedProjects = response.data;
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    async fetchRequestedProjects() {
      PojectManagerApi.fetchForPoster()
        .then((response) => {
          this.requestedProjects = response.data;
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
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
