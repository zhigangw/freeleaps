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
import SellerMarketplace from "../../pages/seller/SellerMarketplace";
import SellerProjectView from "../../pages/seller/SellerProjectView";
import SellerQuoting from "../../pages/seller/SellerQuoting";
import SellerServiceCreate from "../../pages/seller/SellerServiceCreate";
import SellerSkill from "../../pages/seller/SellerSkill";
import SellerTransferMoney from "../../pages/seller/SellerTransferMoney";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/front-door' },
    {
      name: 'front-door',
      path: '/front-door',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: FrontDoor/*, footer: TeamsFooter */ },
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
      components: { default: UserSignin },
    },

    {
      name: 'buyer-register',
      path: '/buyer-register',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: BuyerRegister },
    },

    {
      name: 'buyer-basic-info',
      path: '/buyer-basic-info',
      meta: {
        requiredRoles: [
          userRoleEnum.BUYER
        ]
      },
      components: { default: BuyerBasicInfo },
    },

    {
      name: 'buyer-photo',
      path: '/buyer-photo',
      meta: {
        requiredRoles: [
          userRoleEnum.BUYER
        ]
      },
      components: { default: BuyerPhoto },
    },

    {
      name: 'buyer-linkedin',
      path: '/buyer-linkedin',
      meta: {
        requiredRoles: [
          userRoleEnum.BUYER
        ]
      },
      components: { default: BuyerLinkedin },
    },

    {
      name: 'buyer-package',
      path: '/buyer-package',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerPackage },
    },

    {
      name: 'buyer-dashboard',
      path: '/buyer-dashboard',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerDashboard },
    },

    {
      name: 'buyer-invite-seller',
      path: '/buyer-invite-seller',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerInviteSeller },
    },

    {
      name: 'buyer-project-view',
      path: '/buyer-project-view',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerProjectView },
    },

    {
      name: 'buyer-quote-view',
      path: '/buyer-quote-view',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: BuyerQuoteView },
    },

    {
      name: 'post-project-description',
      path: '/post-project-description',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostProjectDescription },
    },

    {
      name: 'post-project-note',
      path: '/post-project-note',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostProjectNote },
    },

    {
      name: 'post-project-review',
      path: '/post-project-review',
      meta: { requiredRoles: [userRoleEnum.BUYER] },
      components: { default: PostProjectReview },
    },


    {
      name: 'seller-register',
      path: '/seller-register',
      meta: { requiredRoles: [userRoleEnum.NONE] },
      components: { default: SellerRegister },
    },
    {
      name: 'seller-basic-info',
      path: '/seller-basic-info',
      meta: {
        requiredRoles: [
          userRoleEnum.SELLER
        ]
      },
      components: { default: SellerBasicInfo },
    },

    {
      name: 'seller-photo',
      path: '/seller-photo',
      meta: {
        requiredRoles: [
          userRoleEnum.SELLER
        ]
      },
      components: { default: SellerPhoto },
    },

    {
      name: 'seller-linkedin',
      path: '/seller-linkedin',
      meta: {
        requiredRoles: [
          userRoleEnum.SELLER
        ]
      },
      components: { default: SellerLinkedin },
    },

    {
      name: 'seller-package',
      path: '/seller-package',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerPackage },
    },

    {
      name: 'seller-dashboard',
      path: '/seller-dashboard',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerDashboard },
    },

    {
      name: 'seller-buyer-request-view',
      path: '/seller-buyer-request-view',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerBuyerRequestView },
    },


    {
      name: 'seller-earnings',
      path: '/seller-earnings',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerEarnings },
    },

    {
      name: 'seller-marketplace',
      path: '/seller-marketplace',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerMarketplace },
    },

    {
      name: 'seller-project-view',
      path: '/seller-project-view',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerProjectView },
    },

    {
      name: 'seller-quoting',
      path: '/seller-quoting',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerQuoting },
    },

    {
      name: 'seller-service-create',
      path: '/seller-service-create',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerServiceCreate },
    },

    {
      name: 'seller-skill',
      path: '/seller-skill',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerSkill },
    },
    {
      name: 'seller-transfer-money',
      path: '/seller-transfer-money',
      meta: { requiredRoles: [userRoleEnum.SELLER] },
      components: { default: SellerTransferMoney },
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