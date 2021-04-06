<template>
  <div class="container-div">
    <img class="company-logo" alt="freeleaps logo" src="@/assets/logo.png" />
    <div class="nav-bar-container" role="navigation">
      <button class="nav-bar-button" @click="gotoWorkplace">Workplace</button>
      <button class="nav-bar-button" @click="gotoRequests">Requests</button>
      <button class="nav-bar-button" @click="gotoNetwork">Network</button>
      <button class="nav-bar-button" @click="gotoPost">Post</button>
    </div>
    <div class="dropdown">
      <button
        class="account-button"
        type="button"
        id="accountButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img class="account-logo" alt="Account" src="@/assets/account.png" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="accountButton">
        <li>
          <button class="account-menu-button" @click="gotoAccount">Account</button>
        </li>
        <li>
          <button class="account-menu-button" @click="gotoPersonal">Personal</button>
        </li>
        <li>
          <button class="account-menu-button" @click="gotoCareer">Career</button>
        </li>
        <li>
          <button class="account-menu-button" @click="gotoSubscripton">Subscripton</button>
        </li>
        <hr />
        <li>
          <button class="account-menu-button" @click="signout">Log out ({{userIdentityNote}})</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { UserAuthApi } from "../utils/backend/index";

export default {
  name: "HeaderGuest",
  components: {},
  computed: {},
  created() {
    if (this.userIdentityNote.length > 8) {
      this.userIdentityNote = this.userIdentityNote.slice(0, 5) + "...";
    }
  },
  data() {
    return {
      userIdentityNote: this.mnx_getUserIdentity(),
    };
  },
  methods: {
    gotoWorkplace() {
      this.mnx_navToWorkplace();
    },
    gotoRequests() {
      this.mnx_navToRequests();
    },
    gotoNetwork() {
      this.mnx_navToNetwork();
    },
    gotoPost() {
      this.mnx_navToPost();
    },
    gotoAccount() {
      this.mnx_navToUserAccount();
    },
    gotoPersonal() {
      this.mnx_navToUserPersonal();
    },

    gotoCareer() {
      this.mnx_navToUserCareer();
    },
    gotoSubscripton() {
      this.mnx_navToUserWork();
    },
    logout(response, error) {
      response;
      error;
      this.mnx_unauthenticatedUser();
      this.mnx_logoutRole();
      this.mnx_navToFrontDoor();
    },

    signout() {
      UserAuthApi.signout(
        this.mnx_getUserIdentity(),
        this.mnx_getUserAuthToken()
      )
        .then((response) => {
          this.logout(response, null);
        })
        .catch((error) => {
          // continue to logout with errors
          this.logout(null, error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container-div {
  width: 100%;
  height: 100%;
  @extend .d-flex;
  @extend .justify-content-between;
}

.account-logo {
  max-width: 100%;
  max-height: 100%;
}

.company-logo {
  max-width: 100%;
  max-height: 100%;
}

.nav-bar-container {
  @extend .nav;
  @extend .nav-fill;
  @extend .mx-auto;
  @extend .mt-2;
  @extend .h-80;
  @extend .w-90;
  @extend .w-sm-70;
  @extend .w-lg-50;
}

.nav-bar-button {
  @include media-breakpoint-up(xs) {
    font-size: rfs-fluid-value(0.5rem);
  }
  @include media-breakpoint-up(sm) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(md) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(lg) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(xl) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(xxl) {
    font-size: rfs-fluid-value(1rem);
  }
  @extend .align-middle;
  @extend .text-wrap;
  @extend .nav-link;
  @extend .btn;
  @extend .btn-outline-info;
  @extend .border-0;
  @extend .w-20;
  color: #fae4ab;
  height: 100%;
}

.account-button {
  @extend .btn;
  @extend .btn-outline-success;
  @extend .dropdown-toggle;
  @extend .h-90;
}

.account-menu-button {
  @extend .btn;
  @extend .btn-link;
  @extend .dropdown-item;
}
.account-menu-item {
  @extend .dropdown-item;
}
.account-note {
  max-width: 100%;
  @include font-size(0.5rem);
  color: #fae4ab;
}
</style>