import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import wx from 'weixin-js-sdk';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  wx,
  render: h => h(App)
}).$mount('#app')
