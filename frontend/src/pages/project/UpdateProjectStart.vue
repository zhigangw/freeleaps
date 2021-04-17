<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Project Start Date</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateProjectStart">
            <div class="input-group mb-5">
              <date-input class="form-control" v-model="startDate" />
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
  DateUtils,
  PojectManagerApi,
} from "../../utils/index";

import DateInput from "../../components/inputs/infra/DateInput";
export default {
  name: "UpdateProjectStart",
  props: {},

  data() {
    return {
      startDate: DateUtils.FromJsonToString(
        requestPostUtils.fetchProject().trackStatus.kickoffDate
      ),
      project: requestPostUtils.fetchProject(),
    };
  },

  components: { DateInput },

  created() {},
  mounted() {
      
  },
  methods: {
    updateProjectStart() {
      PojectManagerApi.updateStart(
        OIDUtils.FromJson(this.project),
        this.startDate
      )
        .then((response) => {
          response;
          this.project.trackStatus.kickoffDate = this.startDate;
          requestPostUtils.fillProject(this.project);
          this.mnx_navToProjectStartUpdated();
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
