// import {Subject} from 'rxjs'
import rxjs from 'rxjs'
// import 'rxjs/add/operator/filter'

const gebus = new rxjs.Subject()
// const gebus = {}
const geb = {}
const gebInstance = {
  getBus: function () {
    return gebus
  },
  emit: function (obj) {
    gebus.next(obj)
  },
  getFilteredBus: function (arg) { // ex { id : 'foo'}
    if (!isObject(arg)) { // arg needs to be an object
      throw new Error("data provided to geb().filterBy() isn't an object")
    }
    return gebus.filter(gebItem => {
      let flag = true
      let props = Object.getOwnPropertyNames(arg)
      props.forEach(prop => {
        if (gebItem[prop] !== arg[prop]
        ) {
          flag = false
        }
      })
      return flag
    })
  }
}

geb.install = function (Vue, options) {
  Vue.directive('geb-click-emit', {
    componentUpdated: function (el, binding) {
    },
    inserted: function (el, binding) {
      el.addEventListener('click', (event) => {
        gebus.next(binding.value)
      })
    }
  })
  Vue.directive('geb-keyupenter-emit', {
    componentUpdated: function (el, binding) {
    },
    inserted: function (el, binding) {
      el.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode
        if (key === 13) {
          gebus.next(binding.value)
        }
      })
    }
  })
  Vue.prototype.$geb = gebInstance
}

function isObject (obj) {
  return obj === Object(obj)
}

export default geb

export const gebHandler = gebInstance
export const bus = gebus
