import { createRouter, createWebHistory } from 'vue-router';
import { store, userRoleEnum } from '../store/index';

import EmailSignin from "../../pages/account/EmailSignin";
import FrontDoor from "../../pages/account/FrontDoor";
import UserSignin from "../../pages/account/UserSignin";
import EmailSignup from "../../pages/account/EmailSignup";
import UserSettings from "../../pages/account/UserSettings";

import BuyerDashboard from "../../pages/buyer/BuyerDashboard";
import BuyerInviteSeller from "../../pages/buyer/BuyerInviteSeller";
import BuyerProjectView from "../../pages/buyer/BuyerProjectView";
import BuyerRequestView from "../../pages/buyer/BuyerRequestView";
import BuyerQuoteView from "../../pages/buyer/BuyerQuoteView";
import PostRequestDescription from "../../pages/buyer/PostRequestDescription";
import PostRequestNote from "../../pages/buyer/PostRequestNote";
import PostRequestReview from "../../pages/buyer/PostRequestReview";
import SellerDashboard from "../../pages/seller/SellerDashboard";
import SellerBuyerRequestView from "../../pages/seller/SellerBuyerRequestView";
import SellerEarnings from "../../pages/seller/SellerEarnings";
import SellerBrowseRequests from "../../pages/seller/SellerBrowseRequests";
import SellerProjectView from "../../pages/seller/SellerProjectView";
import SellerQuoting from "../../pages/seller/SellerQuoting";
import SellerServiceCreate from "../../pages/seller/SellerServiceCreate";
import SellerSkill from "../../pages/seller/SellerSkill";
import SellerTransferMoney from "../../pages/seller/SellerTransferMoney";

import BuyerNavBar from "../../components/bars/nav/BuyerNavBar.vue";
import HeaderGuest from "../../components/bars/header/HeaderGuest.vue";
import SellerNavBar from "../../components/bars/nav/SellerNavBar.vue";
import UserSignupBar from "../../components/bars/nav/UserSignupBar.vue";
import UserNavBar from "../../components/bars/nav/UserNavBar.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/front-door' },
    {
      name: 'email-signin',
      path: '/email-signin/:email',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: EmailSignin/*, footer: TeamsFooter */, header: HeaderGuest },
      props: true,
    },

    {
      name: 'email-signup',
      path: '/email-signup/:email',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: EmailSignup, header: UserSignupBar },
      props: true,
    },


    {
      name: 'front-door',
      path: '/front-door',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: FrontDoor/*, footer: TeamsFooter */, header: HeaderGuest },
      /*children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        } // /teams/t1
      ]*/
    },

    {
      name: 'user-signin',
      path: '/user-signin',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: UserSignin, header: HeaderGuest },
      props: true,
    },

    {
      name: 'user-settings',
      path: '/user-settings',
      meta: { requiredRoles: [userRoleEnum.BUYER, userRoleEnum.SELLER] },
      components: { default: UserSettings, header: UserNavBar },
      props: true,
    },

    {
      name: 'buyer-dashboard',
      path: '/buyer-dashboard',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerDashboard, header: BuyerNavBar },
    },

    {
      name: 'buyer-invite-seller',
      path: '/buyer-invite-seller',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerInviteSeller, header: BuyerNavBar },
    },

    {
      name: 'buyer-request-view',
      path: '/buyer-request-view/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerRequestView, header: BuyerNavBar },
      props: true,
    },

    {
      name: 'buyer-quote-view',
      path: '/buyer-quote-view',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerQuoteView, header: BuyerNavBar },
    },
    {
      name: 'buyer-project-view',
      path: '/buyer-project-view/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerProjectView, header: BuyerNavBar },
      props: true,
    },

    {
      name: 'post-request-description',
      path: '/post-request-description/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostRequestDescription, header: BuyerNavBar },
      props: true,
    },

    {
      name: 'post-request-note',
      path: '/post-request-note/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostRequestNote, header: BuyerNavBar },
      props: true,
    },

    {
      name: 'post-request-review',
      path: '/post-request-review/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostRequestReview, header: BuyerNavBar },
      props: true,
    },

    {
      name: 'seller-dashboard',
      path: '/seller-dashboard',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerDashboard, header: SellerNavBar },
    },

    {
      name: 'seller-buyer-request-view',
      path: '/seller-buyer-request-view/:requestId',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerBuyerRequestView, header: SellerNavBar },
      props: true,
    },


    {
      name: 'seller-earnings',
      path: '/seller-earnings',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerEarnings, header: SellerNavBar },
    },

    {
      name: 'seller-browse-requests',
      path: '/seller-browse-requests',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerBrowseRequests, header: SellerNavBar },
    },

    {
      name: 'seller-project-view',
      path: '/seller-project-view/:projectId',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerProjectView, header: SellerNavBar },
      props: true
    },

    {
      name: 'seller-quoting',
      path: '/seller-quoting',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerQuoting, header: SellerNavBar },
    },

    {
      name: 'seller-service-create',
      path: '/seller-service-create',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerServiceCreate, header: SellerNavBar },
    },

    {
      name: 'seller-skill',
      path: '/seller-skill',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerSkill, header: SellerNavBar },
    },
    {
      name: 'seller-transfer-money',
      path: '/seller-transfer-money',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerTransferMoney, header: SellerNavBar },
    },

    /*
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
    */
  ],

  linkActiveClass: 'active',
  /*    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        return { left: 0, top: 0 };
      }
  */
});



router.beforeEach(function (to, from, next) {

  console.log(to, from, store.getters["userProfile/userRole"]);

  if (to.name == 'front-door') {
    next();
  }
  else if (to.name == 'user-signin') {
    next();
  }
  else if (to.meta.requiredRoles.includes(userRoleEnum.NONE)) {
    next();
  }
  else if (to.meta.requiredRoles.includes(store.getters["userProfile/userRole"])) {
    next();
  } else {
    next('/user-signin');
  }
});

/*
router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  // next();
});
 
router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});
*/

export { router };