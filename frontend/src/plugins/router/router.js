import { createRouter, createWebHistory } from 'vue-router';
import { store, userRoleEnum } from '../store/index';

import FrontDoor from "../../pages/account/FrontDoor";
import EmailSignin from "../../pages/account/EmailSignin";
import EmailSignup from "../../pages/account/EmailSignup";
import UserForgetPassword from "../../pages/account/UserForgetPassword";
import UserForgetUsername from "../../pages/account/UserForgetUsername";
import TempPasswordSent from "../../pages/account/TempPasswordSent";
import UsernameSent from "../../pages/account/UsernameSent";
import UserSignin from "../../pages/account/UserSignin";



import UserAccount from "../../pages/profile/account/UserAccount";
import UpdateUsername from "../../pages/profile/account/UpdateUsername";
import UsernameUpdated from "../../pages/profile/account/UsernameUpdated";
import UpdatePassword from "../../pages/profile/account/UpdatePassword";
import PasswordUpdated from "../../pages/profile/account/PasswordUpdated";
import UpdateEmail from "../../pages/profile/account/UpdateEmail";
import EmailUpdateRequireCode from "../../pages/profile/account/EmailUpdateRequireCode";
import EmailUpdated from "../../pages/profile/account/EmailUpdated";
import UpdateMobile from "../../pages/profile/account/UpdateMobile";
import MobileUpdateRequireCode from "../../pages/profile/account/MobileUpdateRequireCode";
import MobileUpdated from "../../pages/profile/account/MobileUpdated";




import UserPersonal from "../../pages/profile/personal/UserPersonal";
import UpdatePhoto from "../../pages/profile/personal/UpdatePhoto";
import PhotoUpdated from "../../pages/profile/personal/PhotoUpdated";
import UpdateName from "../../pages/profile/personal/UpdateName";
import NameUpdated from "../../pages/profile/personal/NameUpdated";
import UpdateLocation from "../../pages/profile/personal/UpdateLocation";
import LocationUpdated from "../../pages/profile/personal/LocationUpdated";


import UserCareer from "../../pages/profile/career/UserCareer";
import UpdateHeadline from "../../pages/profile/career/UpdateHeadline";
import HeadlineUpdated from "../../pages/profile/career/HeadlineUpdated";
import UpdateHighlight from "../../pages/profile/career/UpdateHighlight";
import HighlightUpdated from "../../pages/profile/career/HighlightUpdated";
import UpdatePeriod from "../../pages/profile/career/UpdatePeriod";
import PeriodUpdated from "../../pages/profile/career/PeriodUpdated";
import UpdatePreferredRoles from "../../pages/profile/career/UpdatePreferredRoles";
import PreferredRolesUpdated from "../../pages/profile/career/PreferredRolesUpdated";


import ChooseUsername from "../../pages/profile/work/ChooseUsername";
import ChoosePlan from "../../pages/profile/work/ChoosePlan";
import PlanUpdated from "../../pages/profile/work/PlanUpdated";
import UserWork from "../../pages/profile/work/UserWork";

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

import HeaderGuest from "../../headers/HeaderGuest.vue";
import HeaderUser from "../../headers/HeaderUser.vue";


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
      name: 'email-update--require-code',
      path: '/email-update--require-code/:email',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: EmailUpdateRequireCode, header: HeaderUser },
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
      name: 'mobile-update--require-code',
      path: '/mobile-update--require-code/:mobile',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: MobileUpdateRequireCode, header: HeaderUser },
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
      name: 'user-personal',
      path: '/user-personal',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UserPersonal, header: HeaderUser },
      props: true,
    },

    {
      name: 'update-photo',
      path: '/update-photo/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdatePhoto, header: HeaderUser },
      props: false,
    },

    {
      name: 'photo-updated',
      path: '/photo-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: PhotoUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-name',
      path: '/update-name/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateName, header: HeaderUser },
      props: false ,
    },

    {
      name: 'name-updated',
      path: '/name-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: NameUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-location',
      path: '/update-location/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateLocation, header: HeaderUser },
      props: false,
    },

    {
      name: 'location-updated',
      path: '/location-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: LocationUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'user-career',
      path: '/user-career',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UserCareer, header: HeaderUser },
      props: true,
    },

    {
      name: 'update-headline',
      path: '/update-headline/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateHeadline, header: HeaderUser },
      props: false,
    },

    {
      name: 'headline-updated',
      path: '/headline-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: HeadlineUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-highlight',
      path: '/update-highlight/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateHighlight, header: HeaderUser },
      props: false,
    },

    {
      name: 'highlight-updated',
      path: '/highlight-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: HighlightUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-period',
      path: '/update-period/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdatePeriod, header: HeaderUser },
      props: false,
    },

    {
      name: 'period-updated',
      path: '/period-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: PeriodUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-preferred-roles',
      path: '/update-preferred-roles/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdatePreferredRoles, header: HeaderUser },
      props: false,
    },

    {
      name: 'preferred-roles-updated',
      path: '/preferred-roles-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: PreferredRolesUpdated, header: HeaderUser },
      props: false,
    },



    {
      name: 'choose-plan',
      path: '/choose-plan/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: ChoosePlan, header: HeaderUser },
      props: false,
    },

    {
      name: 'choose-username',
      path: '/choose-username/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: ChooseUsername, header: HeaderUser },
      props: false,
    },


    {
      name: 'plan-updated',
      path: '/plan-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: PlanUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'user-work',
      path: '/user-work/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UserWork, header: HeaderUser },
      props: false,
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