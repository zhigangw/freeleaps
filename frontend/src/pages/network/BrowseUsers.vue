<template>
  <div class="lf-board-container">
    <div class="lf-head-container">
      <div class="flex-grow-1 border pe-1 d-flex">
        <label class="me-1" for="search-input">Search:</label>
        <input id="search-input" class="flex-grow-1" type="text" />
      </div>
    </div>
    <div class="row-flow-container">
      <div
        class="lf-body-block-container"
        style="cursor: pointer"
        v-for="(user,index) in userList"
        :key="index"
        @click="viewUser(user)"
      >
        <div class="lf-body-block-container-body">
          <div style="lf-body-item-block">
            <h5 class="lf-body-item-block-label">{{user.username}}</h5>
            <div class="lf-body-item-block-img me-5" style="width:64pt">
              <img :src="user.photo" class="lf-body-item-block-img" />
            </div>
          </div>
          <div style="lf-body-item-block">
            <h5 class="lf-body-item-block-label">Name</h5>
            <p class="lf-body-item--block-text">{{user.firstName}} {{user.lastName}}</p>
          </div>
          <div style="lf-body-item-block">
            <h5 class="lf-body-item-block-label">Headline</h5>
            <p class="lf-body-item--block-text">{{user.headline}}</p>
          </div>
          <div style="lf-body-item-block">
            <h5 class="lf-body-item-block-label">Preference</h5>
            <p class="lf-body-item--block-text">{{user.preferredRoles}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserProfileApi, userProfileUtils } from "../../utils/index";

export default {
  name: "BrowseUsers",
  props: {},
  components: {},
  data() {
    return {
      userList: [],
    };
  },

  created() {},
  mounted() {
    this.fetchAllUserSummary();
  },
  methods: {
    async viewUser(user) {
      UserProfileApi.fetchSettingsById(user.id)
        .then((response) => {
          userProfileUtils.fillUser(response.data);
          this.mnx_navToViewUser();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
    async fetchAllUserSummary() {
      UserProfileApi.fetchSummary()
        .then((response) => {
          this.userList = response.data;
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poster-item {
  @extend .lf-item-flex-box-block;
  @extend .mx-1;
}

.poster-item-text {
  @extend .lf-body-item-text;
  @extend .border-0;
}
</style>
