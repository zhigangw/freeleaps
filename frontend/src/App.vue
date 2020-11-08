<template>
  <div>
    <buyer-nav-bar></buyer-nav-bar>
    <main>
      <router-view></router-view>
    </main>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h3>{{isUserAuthenticated}}</h3>
    <button @click="logout">logout</button>
    <FrontDoor />
    <UserBasic />
    <UserLinkedin />
    <BuyerRegister />
    <UserSignin />
    <BuyerDashboard />
    <BuyerInviteSeller />
    <BuyerPackage />
    <BuyerProjectList />
    <BuyerQuoteView />
    <PostProjectDescription />
    <PostProjectNote />
    <PostProjectReview />
    <SellerRegister />
    <SellerBuyerRequestView />
    <SellerDashboard />
    <SellerEarnings />
    <SellerMarketplace />
    <SellerPackage />
    <SellerProjectView />
    <SellerQuoting />
    <SellerServiceCreate />
    <SellerSkill />
    <SellerTransferMoney />
  </div>
</template>

<script>
import BuyerNavBar from "./components/nav/BuyerNavBar.vue";

import FrontDoor from "./pages/user/FrontDoor";
import UserBasic from "./pages/user/UserBasic";
import UserLinkedin from "./pages/user/UserLinkedin";
import UserSignin from "./pages/user/UserSignin";
import BuyerRegister from "./pages/buyer/BuyerRegister";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import BuyerInviteSeller from "./pages/buyer/BuyerInviteSeller";
import BuyerPackage from "./pages/buyer/BuyerPackage";
import BuyerProjectList from "./pages/buyer/BuyerProjectList";
import BuyerQuoteView from "./pages/buyer/BuyerQuoteView";
import PostProjectDescription from "./pages/buyer/PostProjectDescription";
import PostProjectNote from "./pages/buyer/PostProjectNote";
import PostProjectReview from "./pages/buyer/PostProjectReview";
import SellerRegister from "./pages/seller/SellerRegister";
import SellerBuyerRequestView from "./pages/seller/SellerBuyerRequestView";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerEarnings from "./pages/seller/SellerEarnings";
import SellerMarketplace from "./pages/seller/SellerMarketplace";
import SellerPackage from "./pages/seller/SellerPackage";
import SellerProjectView from "./pages/seller/SellerProjectView";
import SellerQuoting from "./pages/seller/SellerQuoting";
import SellerServiceCreate from "./pages/seller/SellerServiceCreate";
import SellerSkill from "./pages/seller/SellerSkill";
import SellerTransferMoney from "./pages/seller/SellerTransferMoney";

export default {
  name: "App",
  components: {
    BuyerNavBar,
    FrontDoor,
    UserBasic,
    UserLinkedin,
    UserSignin,
    BuyerRegister,
    BuyerDashboard,
    BuyerInviteSeller,
    BuyerPackage,
    BuyerProjectList,
    BuyerQuoteView,
    PostProjectDescription,
    PostProjectNote,
    PostProjectReview,
    SellerRegister,
    SellerBuyerRequestView,
    SellerDashboard,
    SellerEarnings,
    SellerMarketplace,
    SellerPackage,
    SellerProjectView,
    SellerQuoting,
    SellerServiceCreate,
    SellerSkill,
    SellerTransferMoney,
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters["userAuth/isUserAuthenticated"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("userAuth/userUnauthenticated");
      this.$store.dispatch("userProfile/logoutRoles");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
