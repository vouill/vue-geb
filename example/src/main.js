import Vue from 'vue'
import App from './App.vue'
import geb from './vue-geb'
import logIdComponent from './logIdComponent.vue'
import logAllComponent from './logAllComponent.vue'
import toBus from'./sendToBusComponent.vue'
import VueRouter from 'vue-router'
import simpleToBus from './simpleToBus.vue'

Vue.use(VueRouter)
Vue.use(geb)
Vue.component('logidcomponent', logIdComponent)
Vue.component('logallcomponent', logAllComponent)
Vue.component('tobus', toBus)
Vue.component('simpletobus', simpleToBus)

Vue.directive('highlightjs', {
    inserted: function (el, binding) {
        hljs.highlightBlock(el)
    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})
