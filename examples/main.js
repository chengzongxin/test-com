import Vue from 'vue'
import App from './App.vue'
// register
// import warnSunBtn from '../packages/index'
// Vue.use(warnSunBtn)

// import warnSunBtn from '../packages'
// import warnSunBtn from '../packages'
// Vue.use(warnSunBtn)

import testCom from '../packages'
Vue.use(testCom)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
