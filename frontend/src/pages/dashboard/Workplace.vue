<template>
  <div class="row-flow-container">
    <div
      class="row-flow-item-container"
      v-for="(message,index) in messageList"
      :key="index"
      @click="viewMessage(message)"
    >
      <div class="row-flow-item-subject-area">
        <p class="row-flow-item-subject-text">{{message.subject}}</p>
      </div>
      <div class="row-flow-item-status-area">
        <p class="row-flow-item-status-text">{{message.category}}</p>
      </div>
      <div class="row-flow-item-notes-area">
        <p class="row-flow-item-notes-text">{{getFormalizedDate(message)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { WorkplaceApi, requestPostUtils, DateUtils } from "../../utils/index";

export default {
  name: "WorkPlace",
  props: {},
  components: {},
  data() {
    return {
      messageList: [],
    };
  },

  created() {},
  mounted() {
    this.fetchInbox();
  },
  methods: {
    getFormalizedDate(message) {
      return DateUtils.FromJsonToString(message.date);
    },

    viewMessage(message) {
      if (message.category == "quote") {
        requestPostUtils.fillQuote(message.quote);
        this.mnx_navToAcceptQuote();
      }
    },
    async fetchInbox() {
      WorkplaceApi.fetchInbox()
        .then((response) => {
          this.messageList = response.data;
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
