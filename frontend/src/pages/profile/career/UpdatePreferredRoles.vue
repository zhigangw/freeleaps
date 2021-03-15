<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Preferred Roles</p>
        <div class="form-group border-0">
          <form @submit.prevent="updatePreferredRoles">
            <div class="input-group-div">
              <div v-for="(checked,role, index) in jobRoles" :key="index" class="check-group-div">
                <input
                  class="check-input"
                  type="checkbox"
                  :value="role"
                  :id="role"
                  :checked="checked"
                  @click="checkJobRole($event)"
                />
                <label
                  class="check-label"
                  :for="role"
                  :style="{ width: widthOfCheckItem + 'em' }"
                >{{role}}</label>
              </div>
            </div>
            <div class="input-group-div">
              <button class="input-headline-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-headline-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CareerProfileApi,
  CareerApi,
  userProfileUtils,
} from "../../../utils/index";

export default {
  name: "UpdatePreferredRoles",
  props: {},

  data() {
    return {
      preferredRoles: [],
      jobRoles: {},
      widthOfCheckItem: 128,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.preferredRoles = userProfileUtils.fetchPreferredRoles();
    this.fetchJobRoles();
  },
  methods: {
    checkJobRole(event) {
      this.jobRoles[event.target.value] = event.target.checked;
    },
    hasError() {
      return this.errorMessage !== null;
    },

    async fetchJobRoles() {
      CareerApi.fetchJobRoles()
        .then((response) => {
          let max_length = 0;
          response.data.forEach((role) => {
            max_length = Math.max(max_length, role.name.length);
            this.jobRoles[role.name] = this.preferredRoles
              ? this.preferredRoles.includes(role.name)
              : false;
          });
          this.widthOfCheckItem = max_length / 2 + 1;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async updatePreferredRoles() {
      this.preferredRoles = [];
      for (const role in this.jobRoles) {
        if (this.jobRoles[role]) {
          this.preferredRoles.push(role);
        }
      }
      if (this.preferredRoles.length == 0) {
        this.errorMessage = "Please select at least one role.";
      }

      if (this.hasError()) {
        return;
      }

      CareerProfileApi.updateJobRole(this.preferredRoles)
        .then((response) => {
          response;
          userProfileUtils.fillPreferredRoles(this.preferredRoles);
          this.mnx_navToPreferredRolesUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    goBack() {
      this.mnx_goBack();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .input-group;
  @extend .my-5;
}

.control-text {
  @extend .form-control;
  @extend .text-wrap;
}

.check-group-div {
  @extend .d-flex, .form-check;
  @extend .mx-3;
}

.check-input {
  @extend .form-check-input;
}

.check-label {
  @extend .form-check-label;
  @extend .text-start;
  @extend .mx-1;
}

.input-headline-submit {
  @extend .form-submit;
}
.input-headline-cancel {
  @extend .form-cancel;
}
</style>
