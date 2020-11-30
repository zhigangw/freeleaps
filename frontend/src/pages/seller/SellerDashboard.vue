<template>
  <div>
    <h1>SellerDashboard</h1>
    <h3>Ongoing Projects</h3>
    <table>
      <tr v-for="project in projects" :key="project._id">
        <td>{{project.workSite.teamSite}}</td>
        <td>
          <button :id="getIdFromProject(project)" @click="viewProject($event)">Details</button>
        </td>
      </tr>
    </table>
    <h3>Open Quotes</h3>
    <h3>Saved Requests</h3>
    <button @click="gotoProjectView">Project Details</button>
    <button @click="gotoEarnings">Earnings</button>
    <button @click="gotoTransferMoney">Transfer Money</button>
  </div>
</template>

<script>
import {
  SellerProfileApi,
  RequestQuoteApi,
  PojectManagerApi,
} from "../../utils/index";
import  { ProjectData } from "../../types/index";

export default {
  name: "SellerDashboard",
  props: {},

  data() {
    return {
      projects: [],
      quotes: [],
      requests: [],
    };
  },

  created() {},
  mounted() {
    this.fetchMyProjects();
    this.fetchMyOpenQuotes();
    this.fetchSavedRequests();
  },
  methods: {
    getIdFromProject(project){
        return ProjectData.getId(project);
    },
    viewProject(event) {
      let projectId = event.currentTarget.id;
      this.mnx_navToSellerProjectView(projectId);
    },
    gotoEarnings() {
      this.mnx_navToSellerEarnings();
    },
    gotoTransferMoney() {
      this.mnx_navToSellerTransferMoney();
    },

    async fetchMyProjects() {
      PojectManagerApi.fetchForProvider()
        .then((response) => {
          this.projects = response.data;
          console.log(this.projects);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchSavedRequests() {
      SellerProfileApi.fetchSavedRequests()
        .then((response) => {
          this.requests = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchMyOpenQuotes() {
      RequestQuoteApi.fetchOpen()
        .then((response) => {
          this.quotes = response.data;
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
