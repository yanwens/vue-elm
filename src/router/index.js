import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../pages/login';
import search from '../pages/search';
import profile from '../pages/profile';
import order from '../pages/order';
import msite from '../pages/msite';

Vue.use(VueRouter);
export  default  new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/login',
      component: login,
    },
    {
      path:'/search',
      component: search,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/order',
      component: order,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/profile',
      component: profile,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/msite',
      component: msite,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/',
      redirect: '/msite'
    }
  ]
});
