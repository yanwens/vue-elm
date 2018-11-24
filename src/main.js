import Vue from 'vue';
import {Button} from 'mint-ui';
import monent from 'moment';
import VueLazy from 'vue-lazyload';

import './mock'
import App from './App';
import store from './store';
import router from './router'
import TopHeader from './components/top-header/TopHeader';
import Split from './components/split/Split.vue';
import lazyImg from './common/img/loading.gif';

Vue.component(Button.name, Button);
Vue.component('TopHeader', TopHeader);
Vue.component('Split', Split);
Vue.use(VueLazy,{
  loading: lazyImg
})
Vue.filter('format',(date, format='YYYY-MM-DD HH:mm:ss')=>{
  return monent(date).format(format)
})
/*eslint-disable no-new*/
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
