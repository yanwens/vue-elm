import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../pages/login/Login.vue';
import Search from '../pages/search/Search.vue';
import Profile from '../pages/profile/Profile.vue';
import Order from '../pages/order/Order.vue';
import Msite from '../pages/msite/Msite.vue';
import Shop from '../pages/shop/Shop.vue';
import Goods from '../pages/shop/goods/Goods.vue';
import Info from '../pages/shop/info/Info.vue';
import Ratings from '../pages/shop/ratings/Ratings.vue';

Vue.use(VueRouter);
export  default  new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/login',
      component: Login,
    },
    {
      path:'/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/msite',
      component: Msite,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: Goods
        },
        {
          path: '/shop/info',
          component: Info
        },
        {
          path: '/shop/ratings',
          component: Ratings
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path:'/',
      redirect: '/msite'
    }
  ]
});
