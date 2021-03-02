import { createRouter, createWebHistory } from 'vue-router';
import { store, userRoleEnum } from '../store/index';

import FrontDoor from "../../pages/account/FrontDoor";
import EmailSignin from "../../pages/account/EmailSignin";
import EmailSignup from "../../pages/account/EmailSignup";
import UserForgetPassword from "../../pages/account/UserForgetPassword"
import UserForgetUsername from "../../pages/account/UserForgetUsername"
import TempPasswordSent from "../../pages/account/TempPasswordSent"
import UsernameSent from "../../pages/account/UsernameSent"
import UserSignin from "../../pages/account/UserSignin";



import UserAccount from "../../pages/profile/UserAccount";
import UpdateUsername from "../../pages/profile/UpdateUsername";
import UsernameUpdated from "../../pages/profile/UsernameUpdated";
import UpdatePassword from "../../pages/profile/UpdatePassword";
import PasswordUpdated from "../../pages/profile/PasswordUpdated";
import UpdateEmail from "../../pages/profile/UpdateEmail";
import EmailUpdated from "../../pages/profile/EmailUpdated";
import UpdateMobile from "../../pages/profile/UpdateMobile";
import MobileUpdated from "../../pages/profile/MobileUpdated";

import Workplace from "../../pages/dashboard/Workplace"

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

import HeaderGuest from "../../components/bars/header/HeaderGuest.vue";
import HeaderUser from "../../components/bars/header/HeaderUser.vue";


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
      components: { default: EmailSignup, header: HeaderGuest },
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
      name: 'user-forget-password',
      path: '/user-forget-password/:username',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: UserForgetPassword, header: HeaderGuest },
      props: true,
    },
    {
      name: 'user-forget-username',
      path: '/user-forget-username/',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: UserForgetUsername, header: HeaderGuest },
      props: false,
    },
    {
      name: 'temp-password-sent',
      path: '/temp-password-sent/:email/:username',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: TempPasswordSent, header: HeaderGuest },
      props: true,
    },

    
    {
      name: 'username-sent',
      path: '/username-sent/:email',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: UsernameSent, header: HeaderGuest },
      props: true,
    },


    {
      name: 'user-signin',
      path: '/user-signin/:emailOrUsername',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: UserSignin, header: HeaderGuest },
      props: true,
    },

    {
      name: 'user-account',
      path: '/user-account',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UserAccount, header: HeaderUser },
      props: true,
    },


    {
      name: 'update-username',
      path: '/update-username/:username',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateUsername, header: HeaderUser },
      props: true,
    },

    {
      name: 'username-updated',
      path: '/username-updated/:username',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UsernameUpdated, header: HeaderUser },
      props: true,
    },

    {
      name: 'update-password',
      path: '/update-password/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdatePassword, header: HeaderUser },
      props: true,
    },

    
    {
      name: 'password-updated',
      path: '/password-updated',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: PasswordUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-email',
      path: '/update-email/:email',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateEmail, header: HeaderUser },
      props: true,
    },

    {
      name: 'email-updated',
      path: '/email-updated/:email',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: EmailUpdated, header: HeaderUser },
      props: true,
    },

    {
      name: 'update-mobile',
      path: '/update-mobile/:mobile',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateMobile, header: HeaderUser },
      props: true,
    },

    {
      name: 'mobile-updated',
      path: '/mobile-updated/:mobile',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: MobileUpdated, header: HeaderUser },
      props: true,
    },

    {
      name: 'workplace',
      path: '/workplace',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: Workplace, header: HeaderUser },
    },

    {
      name: 'buyer-dashboard',
      path: '/buyer-dashboard',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerDashboard, header: HeaderUser },
    },

    {
      name: 'buyer-invite-seller',
      path: '/buyer-invite-seller',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerInviteSeller, header: HeaderUser },
    },

    {
      name: 'buyer-request-view',
      path: '/buyer-request-view/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerRequestView, header: HeaderUser },
      props: true,
    },

    {
      name: 'buyer-quote-view',
      path: '/buyer-quote-view',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerQuoteView, header: HeaderUser },
    },
    {
      name: 'buyer-project-view',
      path: '/buyer-project-view/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerProjectView, header: HeaderUser },
      props: true,
    },

    {
      name: 'post-request-description',
      path: '/post-request-description/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostRequestDescription, header: HeaderUser },
      props: true,
    },

    {
      name: 'post-request-note',
      path: '/post-request-note/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostRequestNote, header: HeaderUser },
      props: true,
    },

    {
      name: 'post-request-review',
      path: '/post-request-review/:requestId',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostRequestReview, header: HeaderUser },
      props: true,
    },

    {
      name: 'seller-dashboard',
      path: '/seller-dashboard',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerDashboard, header: HeaderUser },
    },

    {
      name: 'seller-buyer-request-view',
      path: '/seller-buyer-request-view/:requestId',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerBuyerRequestView, header: HeaderUser },
      props: true,
    },


    {
      name: 'seller-earnings',
      path: '/seller-earnings',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerEarnings, header: HeaderUser },
    },

    {
      name: 'seller-browse-requests',
      path: '/seller-browse-requests',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerBrowseRequests, header: HeaderUser },
    },

    {
      name: 'seller-project-view',
      path: '/seller-project-view/:projectId',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerProjectView, header: HeaderUser },
      props: true
    },

    {
      name: 'seller-quoting',
      path: '/seller-quoting',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerQuoting, header: HeaderUser },
    },

    {
      name: 'seller-service-create',
      path: '/seller-service-create',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerServiceCreate, header: HeaderUser },
    },

    {
      name: 'seller-skill',
      path: '/seller-skill',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerSkill, header: HeaderUser },
    },
    {
      name: 'seller-transfer-money',
      path: '/seller-transfer-money',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerTransferMoney, header: HeaderUser },
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
  if (to.name == 'front-door') {
    next();
  }
  else if (to.meta.requiredRoles.includes(userRoleEnum.NONE)) {
    next();
  }
  else if (to.meta.requiredRoles.includes(store.getters["userProfile/userRole"])) {
    next();
  } else {
    next('/front-door');
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