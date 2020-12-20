import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import vmodal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(vmodal);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
