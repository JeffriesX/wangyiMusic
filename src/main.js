import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/utils/vant-ui'
import '@/assets/icons/iconfont.css'
import FooterBar from '@/components/footerBar.vue'

Vue.config.productionTip = false

Vue.component('FooterBar', FooterBar)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
