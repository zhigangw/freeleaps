<template>
  <div>
    <h1>PostProjectReview</h1>
    <button type="button" @click="modifyDescription">Description</button>
    <button type="button" @click="modifyNotes">Notes</button>
    <button type="button" @click="postRequest">Post Now</button>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostStatusEnum } from "../../types/index";

export default {
  name: "PostRequestReview",
  props: {
    requestId: null,
  },

  data() {
    return {
      description: null,
      notes: null,
    };
  },

  created() {},
  mounted() {
    this.fetchRequest();
  },
  methods: {
    async postRequest() {
      RequestPostApi.fillStatus(this.requestId, requestPostStatusEnum.PUBLISHED)
        .then((response) => {
          this.mnx_navToBuyerDashboard();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchRequest() {
      this.description = requestPostUtils.fetchDescription();
      this.notes = requestPostUtils.fetchNotes();
    },

    modifyDescription(){
          this.mnx_navToPostRequestDescription();
    },

    modifyNotes(){
          this.mnx_navToPostRequestNotes();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
