import Vue from 'vue';
import {Button} from 'mint-ui';

import './mock'
import App from './App';
import store from './store';
import router from './router'
import TopHeader from './components/top-header/TopHeader';

Vue.component(Button.name, Button);
Vue.component('TopHeader', TopHeader);
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
