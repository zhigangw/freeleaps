<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p
          class="callout text-center"
        >ViewProject.</p>
        <button class="btn btn-primary my-5" @click="backToBrowseProject">Go to project list</button>
      </div>
    </div>
  </div>
</template>

<script>
import { requestPostUtils } from "../../utils/index";

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
