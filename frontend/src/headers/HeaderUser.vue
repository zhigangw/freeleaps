<template>
  <div class="container-div">
    <img class="company-logo" alt="freeleaps logo" src="@/assets/logo.png" />
    <div class="nav-bar-container" role="navigation">
      <div class="nav-bar-dropdown btn-group">
        <button type="button" class="nav-bar-button" @click="gotoWorkplace">Workplace</button>
        <button
          class="nav-bar-dropdown-button dropdown-toggle-split"
          id="workplace-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Dropdown</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="workplace-dropdown">
          <li>
            <button class="nav-bar-dropdown-menu-button" @click="gotoWorkplaceMessages">Messages</button>
          </li>
          <li>
            <button class="nav-bar-dropdown-menu-button" @click="gotoWorkplaceRequests">Requests</button>
          </li>
          <li>
            <button class="nav-bar-dropdown-menu-button" @click="gotoWorkplaceProjects">Projects</button>
          </li>
          <li>
            <button class="nav-bar-dropdown-menu-button" @click="gotoWorkplaceProposals">Proposals</button>
          </li>
        </ul>
      </div>
      <button class="nav-bar-button w-20" @click="gotoRequests">Requests</button>
      <button class="nav-bar-button w-20" @click="gotoNetwork">Network</button>
      <button class="nav-bar-button w-20" @click="gotoPost">Post</button>
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
          <button class="account-menu-button" @click="gotoAchievement">Achievement</button>
        </li>
        <li>
          <button class="account-menu-button" @click="gotoSubscripton">Subscripton</button>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
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
    gotoWorkplaceProposals() {
      this.mnx_navToWorkplaceProposals();
    },
    gotoWorkplaceRequests() {
      this.mnx_navToWorkplaceRequests();
    },
    gotoWorkplaceProjects() {
      this.mnx_navToWorkplaceProjects();
    },
    gotoWorkplaceMessages() {
      this.mnx_navToWorkplaceMessages();
    },
    gotoWorkplace() {
      this.mnx_navToWorkplace();
    },
    gotoRequests() {
      this.mnx_navToRequests();
    },
    gotoNetwork() {
      this.mnx_navToBrowseUser();
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
    gotoAchievement(){
      this.mnx_navToWorkAchievement();
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
  @extend .mt-0;
  @extend .h-100;
  @extend .w-90;
  @extend .w-sm-70;
  @extend .w-lg-50;
}

.nav-bar-item {
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
  @extend .border-0;
}
.nav-bar-button {
  @extend .nav-bar-item;
  @extend .nav-link;
  @extend .btn;
  @extend .btn-outline-info;
  color: #fae4ab;
}

.nav-bar-dropdown {
  @extend .dropdown;
  @extend .nav-bar-item;
}
.nav-bar-dropdown-menu-button {
  @extend .btn;
  @extend .btn-link;
  @extend .dropdown-item;
}

.nav-bar-dropdown-button {
  @extend .btn;
  @extend .btn-outline-success;
  @extend .dropdown-toggle;
  color: #fae4ab;
  @extend .h-100;
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