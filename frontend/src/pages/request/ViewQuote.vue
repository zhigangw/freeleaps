<template>
  <div class="row-flow-container">
    <quote-view-template />
    <div class="lf-submit-container">
      <button class="btn btn-primary" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
import { requestPostUtils } from "../../utils/index";
import QuoteViewTemplate from "./QuoteViewTemplate";
export default {
  name: "AcceptQuote",
  props: {},
  components: { QuoteViewTemplate },
  data() {
    return {
      request: requestPostUtils.fetchRequest(),
      quote: requestPostUtils.fetchQuote(),
      errorMessage: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    goBack() {
      requestPostUtils.fillQuote(this.quote);
      this.mnx_goBack();
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
