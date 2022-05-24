import Vue from 'vue'
import App from './App.vue'
import Calculator from './components/Calculator.vue'
Vue.component('calculator',Calculator)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
