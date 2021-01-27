import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(VuetifyConfirm, { vuetify })

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
