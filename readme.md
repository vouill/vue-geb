# Vue-geb 

<p align="center">
  <a href="https://github.com/vouill/vue-geb" target="_blank">
    <img width="150" src="https://github.com/vouill/vue-geb/tree/master/docs/beg-logo.png">
  </a>
</p>

Vue-geb is a vue Global Event Bus plugin to help broadcast event accros the app using the power of observables.

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

### How do i emit an event in the global Event Bus ?

#### 2 ways to do so :
By a directive :

```html
<button v-geb-click-emit="{id:'foo',payload:'Lorem'}">Send</button>
```
When clicked, an event containing `{id:'foo',payload:'Lorem'}` is emitted inside the Global Event Bus

By a method inside a Vue Component : 

```javascript
methods: {
            sendToBus: function(){
               this.$geb().emit({id:'someId',payload:this.itCanBeData})
            }
        }
```

You can emit an javascript object by this method : `this.$geb().emit(obj)`

### How do i listen to the Global Event Bus ?

```javascript
created: function () {
            this.sub = this.$geb().getBus().subscribe(data => {
                console.log(data)
                // Do anything you want with 'data'
            })
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