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
import { RequestQuoteApi } from "../../../utils/index";
import { ReqeustQuoteData } from "../../../types/index";
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
        ReqeustQuoteData.getId(this.quote),
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
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
  &__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  &__dialog {
    position: relative;
    width: 600px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 20px 10px;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
