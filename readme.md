# Vue-geb - Global Event Bus

Vue-geb is a vue Global Event Bus plugin to help broadcast events across the app using the power of [observables](https://github.com/Reactive-Extensions/RxJS).

[Demo](https://vouill.github.io/vue-geb/)

## Install

```bash
npm install --save vue-geb
```
Or
```bash
yarn add vue-geb
```
## Use

In your `main.js` : 
```
import geb from 'vue-geb'

Vue.use(geb)
```

 [Example usage with modals](https://github.com/vouill/vue-geb-example)
### Basic usage
#### Access the Observable bus:
``` javascript
this.$geb.getBus() // Observable:Subject type 
```
#### Emit Events in the bus:
``` javascript
this.$geb.emit({object}) 
```
#### Listen to the Events in the bus:
``` javascript
this.sub = this.$geb.getBus().subscribe(data => {
      console.log(data)
      // Do anything you want with 'data'
  })
```
#### Listen to specific Events in the bus:
``` javascript
this.sub = this.$geb.getFilteredBus({id:'modal'}).subscribe(data => {
      console.log(data)
      // The callback is only called when an event is fired with at least the id attribute equal to 'modal'
  })
```
#### Vue directive
```html
<button v-geb-click-emit="{id:'foo',payload:'Lorem'}">Send</button>
```

Notice how we use `this.sub = ... .subscribe()`. You need to unsubscribe when your component unmount to avoid memory leaks.

```javascript
destroyed: function () {
            if(this.sub) {
                this.sub.unsubscribe()
            }
        },
```

Please check this [example](https://github.com/vouill/vue-geb-example) for a vue-geb modal usage.

###Advanced

You can also access the same api as vm.$geb outside of vue context (same Event bus too):

```javascript
import { gebHandler } from 'vue-geb'

gebHandler.emit({object}) 
```
This is useful for vue-geb usage in a state management library or any other js file. 


Enjoy ! :)
 
