<template>
  <div>
    <h3>work</h3>
    <table>
      <tr>
        <td>
          <label-button :name="'Email:'" :value="work.email" @click="openEmail" />
        </td>
        <td>
          <label-button :name="'Code Site:'" :value="'Link'" @click="openCodeSite" />
        </td>
        <td>
          <label-button :name="'Package:'" :value="work.package" @click="updatePackage" />
        </td>
      </tr>
      <tr>
        <td>
          <label-button :name="'File Site:'" :value="'Link'" @click="openFileSite" />
        </td>
        <td>
          <label-button :name="'Service Site:'" :value="'Link'" @click="openServiceSite" />
        </td>
      </tr>
    </table>
    <package-settings-modal ref="packageSettingsModal" @updated="packageUpdated" />
  </div>
</template>

<script>
import LabelButton from "../../buttons/templates/LabelButton";
import { UserProfileApi } from "../../../utils/index";
import PackageSettingsModal from "../../modals/user/PackageSettingsModal";

export default {
  name: "WorkSettings",
  props: {},
  components: {
    LabelButton,
    PackageSettingsModal,
  },

  data() {
    return {
      work: {},
    };
  },

  created() {},
  mounted() {
    this.fetchWorkProfile();
  },
  methods: {
    openEmail() {
      window.open();
    },

    openCodeSite() {
      window.open(this.work.codeSite);
    },

    openFileSite() {
      window.open(this.work.fileSite);
    },

    openServiceSite() {
      window.open(this.work.serviceSite);
    },

    updatePackage() {
      console.log(this.work);
      this.$refs.packageSettingsModal.openModal(this.work.package);
    },
    packageUpdated(service) {
      this.work.package = service;
    },
    async fetchWorkProfile() {
      UserProfileApi.fetchWork()
        .then((response) => {
          this.work = response.data;
        })
        .catch((error) => {
          console.log(error);
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
