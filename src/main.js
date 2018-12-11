import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './sass/initial.sass'
import './sass/class.sass'

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
