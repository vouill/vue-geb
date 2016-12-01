import Vue from 'vue'
import App from './App.vue'
import geb from 'vue-geb'
import logComponent from './logComponent.vue'
import toBus from'./sendToBusComponent.vue'

Vue.use(geb)
Vue.component('logcomponent',logComponent)
Vue.component('tobus',toBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
