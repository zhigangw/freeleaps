<template>
  <basic-modal ref="basicModal" v-show="show" @close="modalClosed">
    <template #header>
      <h3>Choose Package</h3>
    </template>
    <template #body>
      <input type="radio" id="packageN" value="0" v-model.number="service" />
      <label for="packageI">No Package</label>
      <br />
      <input type="radio" id="packageI" value="1" v-model.number="service" />
      <label for="packageI">Package I</label>
      <br />
      <input type="radio" id="packageII" value="2" v-model.number="service" />
      <label for="packageII">Package II</label>
      <br />
    </template>
    <template #footer>
      <button @click="choosePackage">Choose</button>
      <p v-if="message">{{message}}</p>
    </template>
  </basic-modal>
</template>

<script>
import BasicModal from "../templates/BasicModal";
import { UserProfileApi } from "../../../utils/index";

export default {
  name: "PackageSettingsModal",
  props: {},
  emits: {
    updated: function (service) {
      return service != undefined;
    },
  },
  components: {
    BasicModal,
  },
  data() {
    return {
      show: false,
      service: 0,
      message: null,
    };
  },

  mounted() {},
  methods: {
    openModal(service) {
      this.show = true;
      this.service = service;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },
    choosePackage() {
      UserProfileApi.choosePackage(this.service)
        .then((response) => {
          this.message = response.data.text;
          this.$emit("updated", this.service);
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
