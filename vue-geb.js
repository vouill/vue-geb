var Subject = require('rxjs/subject').Subject

const vouillMindBus = new Subject()
vouillMindBus.subscribe(o => {
    console.log(`[VMB] received : ${JSON.stringify(o)}`)
})

var geb = {}
geb.install = function (Vue, options) {
    Vue.directive('geb-emit', {
        inserted: function (el, binding) {
            el.addEventListener('click', (event) => {
                vouillMindBus.next(binding.value)
        })
        }
    })

    Vue.prototype.$geb = function () {
        return {
            getBus: function () {
                return vouillMindBus
            },
            emit: function (obj) {
                vouillMindBus.next(obj)
            }
        }
    }
}

module.exports = geb
