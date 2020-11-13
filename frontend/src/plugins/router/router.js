import { createRouter, createWebHistory } from 'vue-router';
import { store, userRoleEnum } from '../store/index';

import FrontDoor from "../../pages/user/FrontDoor";
import UserSignin from "../../pages/user/UserSignin";
import BuyerRegister from "../../pages/buyer/BuyerRegister";
import BuyerBasicInfo from "../../pages/buyer/BuyerBasicInfo";
import BuyerPhoto from "../../pages/buyer/BuyerPhoto"
import BuyerLinkedin from "../../pages/buyer/BuyerLinkedin";
import BuyerPackage from "../../pages/buyer/BuyerPackage";
import BuyerDashboard from "../../pages/buyer/BuyerDashboard";
import BuyerInviteSeller from "../../pages/buyer/BuyerInviteSeller";
import BuyerProjectView from "../../pages/buyer/BuyerProjectView";
import BuyerQuoteView from "../../pages/buyer/BuyerQuoteView";
import PostProjectDescription from "../../pages/buyer/PostProjectDescription";
import PostProjectNote from "../../pages/buyer/PostProjectNote";
import PostProjectReview from "../../pages/buyer/PostProjectReview";
import SellerRegister from "../../pages/seller/SellerRegister";
import SellerBasicInfo from "../../pages/seller/SellerBasicInfo";
import SellerPhoto from "../../pages/seller/SellerPhoto"
import SellerLinkedin from "../../pages/seller/SellerLinkedin";
import SellerPackage from "../../pages/seller/SellerPackage";
import SellerDashboard from "../../pages/seller/SellerDashboard";
import SellerBuyerRequestView from "../../pages/seller/SellerBuyerRequestView";
import SellerEarnings from "../../pages/seller/SellerEarnings";
import SellerBrowseRequests from "../../pages/seller/SellerBrowseRequests";
import SellerProjectView from "../../pages/seller/SellerProjectView";
import SellerQuoting from "../../pages/seller/SellerQuoting";
import SellerServiceCreate from "../../pages/seller/SellerServiceCreate";
import SellerSkill from "../../pages/seller/SellerSkill";
import SellerTransferMoney from "../../pages/seller/SellerTransferMoney";

import BuyerNavBar from "../../components/nav/BuyerNavBar.vue";
import BuyerRegisterBar from "../../components/nav/BuyerRegisterBar.vue";
import GuestBar from "../../components/nav/GuestBar.vue";
import SellerNavBar from "../../components/nav/SellerNavBar.vue";
import SellerRegisterBar from "../../components/nav/SellerRegisterBar.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/front-door' },
    {
      name: 'front-door',
      path: '/front-door',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: FrontDoor/*, footer: TeamsFooter */, header: GuestBar },
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
      components: { default: UserSignin, header: GuestBar },
    },

    {
      name: 'buyer-register',
      path: '/buyer-register',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: BuyerRegister, header: BuyerRegisterBar },
    },

    {
      name: 'buyer-basic-info',
      path: '/buyer-basic-info',
      meta: {
        requiredRoles: [
          userRoleEnum.BUYER
        ]
      },
      components: { default: BuyerBasicInfo, header: BuyerRegisterBar },
    },

    {
      name: 'buyer-photo',
      path: '/buyer-photo',
      meta: {
        requiredRoles: [
          userRoleEnum.BUYER
        ]
      },
      components: { default: BuyerPhoto, header: BuyerRegisterBar },
    },

    {
      name: 'buyer-linkedin',
      path: '/buyer-linkedin',
      meta: {
        requiredRoles: [
          userRoleEnum.BUYER
        ]
      },
      components: { default: BuyerLinkedin, header: BuyerRegisterBar },
    },

    {
      name: 'buyer-package',
      path: '/buyer-package',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerPackage, header: BuyerRegisterBar },
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
      name: 'buyer-project-view',
      path: '/buyer-project-view',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerProjectView, header: BuyerNavBar },
    },

    {
      name: 'buyer-quote-view',
      path: '/buyer-quote-view',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerQuoteView, header: BuyerNavBar },
    },

    {
      name: 'post-project-description',
      path: '/post-project-description',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostProjectDescription, header: BuyerNavBar },
    },

    {
      name: 'post-project-note',
      path: '/post-project-note',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostProjectNote, header: BuyerNavBar },
    },

    {
      name: 'post-project-review',
      path: '/post-project-review',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostProjectReview, header: BuyerNavBar },
    },


    {
      name: 'seller-register',
      path: '/seller-register',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: SellerRegister, header: SellerRegisterBar },
    },
    {
      name: 'seller-basic-info',
      path: '/seller-basic-info',
      meta: {
        requiredRoles: [
          userRoleEnum.SELLER
        ]
      },
      components: { default: SellerBasicInfo, header: SellerRegisterBar },
    },

    {
      name: 'seller-photo',
      path: '/seller-photo',
      meta: {
        requiredRoles: [
          userRoleEnum.SELLER
        ]
      },
      components: { default: SellerPhoto, header: SellerRegisterBar },
    },

    {
      name: 'seller-linkedin',
      path: '/seller-linkedin',
      meta: {
        requiredRoles: [
          userRoleEnum.SELLER
        ]
      },
      components: { default: SellerLinkedin, header: SellerRegisterBar },
    },

    {
      name: 'seller-package',
      path: '/seller-package',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerPackage, header: SellerRegisterBar },
    },

    {
      name: 'seller-dashboard',
      path: '/seller-dashboard',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerDashboard, header: SellerNavBar },
    },

    {
      name: 'seller-buyer-request-view',
      path: '/seller-buyer-request-view',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerBuyerRequestView, header: SellerNavBar },
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
      path: '/seller-project-view',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerProjectView, header: SellerNavBar },
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
  if (to.meta.requiredRoles.includes(store.getters["userProfile/userRole"])) {
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