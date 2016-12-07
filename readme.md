# Vue-geb - Global Event Bus

Vue-geb is a vue Global Event Bus plugin to help broadcast event across the app using the power of observables.

[Demo](https://vouill.github.io/vue-geb/)

## Install

```bash
npm install --save vue-geb
```
## Use

In your `main.js` : 
```
import geb from 'vue-geb'

Vue.use(geb)
```

 [Example usage with modals](https://vouill.github.io/vouillKit/#modals)
### How do i emit an event in the global Event Bus ?
#### 2 ways :
With a  directive :

```html
<button v-geb-click-emit="{id:'foo',payload:'Lorem'}">Send</button>
```
When clicked, an event containing `{id:'foo',payload:'Lorem'}` is emitted inside the Global Event Bus. (Note: you are not constrained by any format, the object format you send is up to you)
At the moment you cant use component data in the directive. you can still use vue directives triggering a component method.

With a method inside a Vue Component : 

```javascript
methods: {
            sendToBus: function(){
               this.$geb.emit({id:'someId',payload:this.itCanAlsoBeData})
            }
        }
```

You can emit event with this method : `this.$geb.emit(data)`

### How do i listen to the Global Event Bus ?

To listen to all the events:

```javascript
created: function () {
            this.sub = this.$geb.getBus().subscribe(data => {
                console.log(data)
                // Do anything you want with 'data'
            })
        },
```

To be notified by specific events : 

```javascript
created: function () {
            this._sub = this.$geb.getFilteredBus({id: 'foo'}).subscribe(data => {
                       // you only get events containing at least the attribute id equal to 'foo'
                    }
            )
        },
```


Dont forget to `unsubscribe` when you destroy the component to avoid memory leak

```javascript
destroyed: function () {
            if(this.sub) {
                this.sub.unsubscribe()
            }
        },
```

