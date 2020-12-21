<template>
  <BasicModal>
    <template #body>
      <h3>Total Budget</h3>
      <p>{{quote.notes.totalBudget}}</p>
    </template>
    <template #footer>
      <button @click="acceptQuote">Accept</button>
    </template>
  </BasicModal>
</template>

<script>
import { RequestQuoteApi, ResponseFormatter } from "../../../utils/index";
import BasicModal from "../templates/BasicModal";

export default {
  name: "QuoteViewerModal",
  props: {
    quote: null,
  },
  components: {
    BasicModal,
  },
  data() {
    return {
      show: false,
    };
  },

  mounted() {},
  methods: {
    acceptQuote() {
      RequestQuoteApi.acceptQuote(
        ResponseFormatter.getId(this.quote),
        this.quote.requestId
      )
        .then((response) => {
          response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
</style>
