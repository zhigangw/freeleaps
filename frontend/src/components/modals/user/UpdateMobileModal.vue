<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Update Mobile</h3>
    </template>
    <template #body>
      <mobile-input ref="mobileInput" v-model="mobile" :label="'new number: +'" />
    </template>
    <template #footer>
      <button @click="updateMobile">Update</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import MobileInput from "../../inputs/user/MobileInput";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "UpdateMobileModal",
  props: {},
  emits: {
    updated: function (mobile) {
      return mobile != undefined;
    },
  },
  components: {
    BasicModal,
    MobileInput,
  },
  data() {
    return {
      show: false,
      mobile: null,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(mobile) {
      this.show = true;
      this.mobile = mobile;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },
    
    updateMobile() {
      this.message = null;
      let validateMobileError = this.$refs.mobileInput.validate();
      if (validateMobileError) {
        this.message = "Please fix the errors before submit";
      } else {
        UserProfileApi.updateMobile(this.mobile)
          .then((response) => {
            this.mobile = response.data.mobile;
            this.message = "new mobile is:" + this.mobile;
            this.$emit("updated", this.mobile);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>


<style scoped>
</style>
