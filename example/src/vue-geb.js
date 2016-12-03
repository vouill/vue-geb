import {Subject} from 'rxjs/Subject'
import 'rxjs/add/operator/filter';

var gebus = new Subject()
gebus.subscribe(o => {
    console.log(`[GEB] received : ${JSON.stringify(o)}`)
})

var geb = {}

geb.install = function (Vue, options) {
    var directiveClickBinding = null
    Vue.directive('geb-click-emit', {
        componentUpdated: function (el,binding) {
            directiveClickBinding = binding.value
        },
        inserted: function (el, binding) {
            directiveClickBinding = binding.value
            el.addEventListener('click', (event) => {
                gebus.next(directiveClickBinding)
        })
        }
    })
    var directiveKeyUpEnterBinding = null
    Vue.directive('geb-keyupenter-emit', {
        componentUpdated: function (el,binding) {
            directiveKeyUpEnterBinding = binding.value
        },
        inserted: function (el, binding) {
            directiveKeyUpEnterBinding = binding.value
            el.addEventListener('keypress', function (e) {
                var key = e.which || e.keyCode;
                if (key === 13) {
                    gebus.next(directiveKeyUpEnterBinding)
                }
            });
        }
    })
    Vue.prototype.$geb =
         {
            getBus: function () {
                return gebus
            },
            emit: function (obj) {
                gebus.next(obj)
            },
            getFilteredBus: function(arg){// ex { id : 'foo'}
                if (!isObject(arg)){// arg needs to be an object
                    throw "data provided to geb().filterBy() isn't an object"
                }
                return gebus.filter( gebItem => {
                    let flag = true
                    let props = Object.getOwnPropertyNames(arg);
                    props.forEach( prop => {
                        if(gebItem[prop] != arg[prop]){
                            flag = false
                        }
                    })
                    return flag
                })
            }

    }
}

function isObject(obj) {
    return obj === Object(obj);
}


module.exports = geb
