var Subject = require('rxjs/subject').Subject
Subject.filter = require('rxjs/add/operator/filter')
// import {Subject} from 'rxjs/Subject'
// import 'rxjs/add/operator/filter';

var gebus = new Subject()
var geb = {}
geb.install = function (Vue, options) {
    Vue.directive('geb-click-emit', {
        componentUpdated: function (el,binding) {
        },
        inserted: function (el, binding) {
            el.addEventListener('click', (event) => {
                gebus.next(binding.value)
            })
        }
    })
    Vue.directive('geb-keyupenter-emit', {
        componentUpdated: function (el,binding) {
        },
        inserted: function (el, binding) {
            el.addEventListener('keypress', function (e) {
                var key = e.which || e.keyCode;
                if (key === 13) {
                    gebus.next(binding.value)
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
