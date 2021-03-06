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
import UpdateWage from "../../pages/profile/career/UpdateWage";
import WageUpdated from "../../pages/profile/career/WageUpdated";
import UpdatePreferredRoles from "../../pages/profile/career/UpdatePreferredRoles";
import PreferredRolesUpdated from "../../pages/profile/career/PreferredRolesUpdated";


import ChooseUsername from "../../pages/profile/work/ChooseUsername";
import ChoosePlan from "../../pages/profile/work/ChoosePlan";
import PlanUpdated from "../../pages/profile/work/PlanUpdated";
import UserWork from "../../pages/profile/work/UserWork";
import WorkAchievement from "../../pages/profile/work/WorkAchievement"


import PostRequestDescription from "../../pages/request/PostRequestDescription";
import PostRequestNote from "../../pages/request/PostRequestNote";
import PostRequestReview from "../../pages/request/PostRequestReview";
import BrowseRequests from "../../pages/request/BrowseRequests"
import QuoteRequest from "../../pages/request/QuoteRequest"
import QuoteSubmitted from "../../pages/request/QuoteSubmitted"
import AcceptQuote from "../../pages/request/AcceptQuote"
import ViewQuote from "../../pages/request/ViewQuote"
import QuoteAccepted from "../../pages/request/QuoteAccepted"
import ViewRequest from "../../pages/request/ViewRequest"


import UpdateProjectStatus from "../../pages/project/UpdateProjectStatus"
import ProjectStatusUpdated from "../../pages/project/ProjectStatusUpdated"
import UpdateProjectDue from "../../pages/project/UpdateProjectDue"
import ProjectDueUpdated from "../../pages/project/ProjectDueUpdated"
import UpdateProjectStart from "../../pages/project/UpdateProjectStart"
import ProjectStartUpdated from "../../pages/project/ProjectStartUpdated"
import ViewProject from "../../pages/project/ViewProject"

import BrowseUsers from "../../pages/network/BrowseUsers"
import ViewUser from "../../pages/network/ViewUser"

import WorkplaceProjects from "../../pages/dashboard/WorkplaceProjects"
import WorkplaceRequests from "../../pages/dashboard/WorkplaceRequests"
import WorkplaceMessages from "../../pages/dashboard/WorkplaceMessages"
import WorkplaceProposals from "../../pages/dashboard/WorkplaceProposals"
import Workplace from "../../pages/dashboard/Workplace"



import BuyerDashboard from "../../pages/buyer/BuyerDashboard";
import BuyerInviteSeller from "../../pages/buyer/BuyerInviteSeller";
import BuyerProjectView from "../../pages/buyer/BuyerProjectView";
import BuyerRequestView from "../../pages/buyer/BuyerRequestView";
import BuyerQuoteView from "../../pages/buyer/BuyerQuoteView";
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
      props: false,
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
      name: 'update-wage',
      path: '/update-wage/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: UpdateWage, header: HeaderUser },
      props: false,
    },

    {
      name: 'wage-updated',
      path: '/wage-updated/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: WageUpdated, header: HeaderUser },
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
      name: 'work-achievement',
      path: '/work-achievement/',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: WorkAchievement, header: HeaderUser },
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
      name: 'post-request-description',
      path: '/post-request-description',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: PostRequestDescription, header: HeaderUser },
      props: false,
    },

    {
      name: 'post-request-note',
      path: '/post-request-note',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: PostRequestNote, header: HeaderUser },
      props: false,
    },

    {
      name: 'post-request-review',
      path: '/post-request-review',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: PostRequestReview, header: HeaderUser },
      props: false,
    },

    {
      name: 'browse-requests',
      path: '/browse-requests',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: BrowseRequests, header: HeaderUser },
      props: false,
    },

    {
      name: 'quote-request',
      path: '/quote-request',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: QuoteRequest, header: HeaderUser },
      props: false,
    },

    {
      name: 'view-request',
      path: '/view-request',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ViewRequest, header: HeaderUser },
      props: false,
    },

    {
      name: 'quote-submitted',
      path: '/quote-submitted',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: QuoteSubmitted, header: HeaderUser },
      props: false,
    },

    {
      name: 'view-quote',
      path: '/view-quote',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ViewQuote, header: HeaderUser },
      props: false,
    },

    {
      name: 'accept-quote',
      path: '/accept-quote',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: AcceptQuote, header: HeaderUser },
      props: false,
    },


    {
      name: 'quote-accepted',
      path: '/quote-accepted',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: QuoteAccepted, header: HeaderUser },
      props: false,
    },


    {
      name: 'update-project-status',
      path: '/update-project-status',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: UpdateProjectStatus, header: HeaderUser },
      props: false,
    },

    {
      name: 'project-status-updated',
      path: '/project-status-updated',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ProjectStatusUpdated, header: HeaderUser },
      props: false,
    },

    
    {
      name: 'update-project-start',
      path: '/update-project-start',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: UpdateProjectStart, header: HeaderUser },
      props: false,
    },

    {
      name: 'project-start-updated',
      path: '/project-start-updated',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ProjectStartUpdated, header: HeaderUser },
      props: false,
    },

    {
      name: 'update-project-due',
      path: '/update-project-due',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: UpdateProjectDue, header: HeaderUser },
      props: false,
    },

    {
      name: 'project-due-updated',
      path: '/project-due-updated',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ProjectDueUpdated, header: HeaderUser },
      props: false,
    },


    {
      name: 'view-project',
      path: '/view-project',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ViewProject, header: HeaderUser },
      props: false,
    },

    {
      name: 'browse-users',
      path: '/browse-users',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: BrowseUsers, header: HeaderUser },
      props: false,
    },

    {
      name: 'view-user',
      path: '/view-user',
      meta: { requiredRoles: [userRoleEnum.USER] },
      components: { default: ViewUser, header: HeaderUser },
      props: false,
    },

    {
      name: 'workplace-projects',
      path: '/workplace-projects',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: WorkplaceProjects, header: HeaderUser },
    },

    {
      name: 'workplace-messages',
      path: '/workplace-messages',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: WorkplaceMessages, header: HeaderUser },
    },

    {
      name: 'workplace-requests',
      path: '/workplace-requests',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: WorkplaceRequests, header: HeaderUser },
    },

    {
      name: 'workplace-proposals',
      path: '/workplace-proposals',
      meta: { requiredRoles: [userRoleEnum.USER, userRoleEnum.ADMIN] },
      components: { default: WorkplaceProposals, header: HeaderUser },
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