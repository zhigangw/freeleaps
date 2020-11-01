<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h3>{{isUserAuthenticated}}</h3>
    <button @click="login">login</button>
    <button @click="logout">logout</button>
    <FrontDoor />
    <UserBasic />
    <UserLinked />
    <UserRegister />
    <UserSignin />
    <BuyerDashboard/>
    <BuyerInviteSeller/>
    <BuyerPackage/>
    <BuyerProjectList/>
    <BuyerQuoteView/>
    <PostProjectDescription/>
    <PostProjectNote/>
    <PostProjectReview/>
    <SellerBuyerRequestView/>
    <SellerDashboard/>
    <SellerEarnings/>
    <SellerMarketplace/>
    <SellerPackage/>
    <SellerProjectView/>
    <SellerQuoting/>
    <SellerServiceCreate/>
    <SellerSkill/>
    <SellerTransferMoney/>
  </div>
</template>

<script>
import FrontDoor from "./components/user/FrontDoor";
import UserBasic from "./components/user/UserBasic";
import UserLinked from "./components/user/UserLinkedin";
import UserRegister from "./components/user/UserRegister";
import UserSignin from "./components/user/UserSignin";
import BuyerDashboard from "./components/buyer/BuyerDashboard";
import BuyerInviteSeller from "./components/buyer/BuyerInviteSeller";
import BuyerPackage from "./components/buyer/BuyerPackage";
import BuyerProjectList from "./components/buyer/BuyerProjectList";
import BuyerQuoteView from "./components/buyer/BuyerQuoteView";
import PostProjectDescription from "./components/buyer/PostProjectDescription";
import PostProjectNote from "./components/buyer/PostProjectNote";
import PostProjectReview from "./components/buyer/PostProjectReview";
import SellerBuyerRequestView from "./components/seller/SellerBuyerRequestView";
import SellerDashboard from "./components/seller/SellerDashboard";
import SellerEarnings from "./components/seller/SellerEarnings";
import SellerMarketplace from "./components/seller/SellerMarketplace";
import SellerPackage from "./components/seller/SellerPackage";
import SellerProjectView from "./components/seller/SellerProjectView";
import SellerQuoting from "./components/seller/SellerQuoting";
import SellerServiceCreate from "./components/seller/SellerServiceCreate";
import SellerSkill from "./components/seller/SellerSkill";
import SellerTransferMoney from "./components/seller/SellerTransferMoney";


export default {
  name: "App",
  components: {
    FrontDoor,
    UserBasic,
    UserLinked,
    UserRegister,
    UserSignin,
    BuyerDashboard,
    BuyerInviteSeller,
    BuyerPackage,
    BuyerProjectList,
    BuyerQuoteView,
    PostProjectDescription,
    PostProjectNote,
    PostProjectReview,
    SellerBuyerRequestView,
    SellerDashboard,
    SellerEarnings,
    SellerMarketplace,
    SellerPackage,
    SellerProjectView,
    SellerQuoting,
    SellerServiceCreate,
    SellerSkill,
    SellerTransferMoney
  },
  computed:{
    isUserAuthenticated(){
      return this.$store.getters['isUserAuthenticated'];
    }
  },
  methods: {
    login(){
      this.$store.dispatch('userAuthenticated');
    },
    logout(){
      this.$store.dispatch('userUnauthenticated');
    }
  }

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
