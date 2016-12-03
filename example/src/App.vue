<template>
    <div id="app">
        <div class="col">
            <logallcomponent></logallcomponent>
            <h1>Vue-geb plugin example</h1>
            <p>The Global Event Bus (GEB) is accessible to every Vue component.<br>
                From any component you can emit or receive data from the GEB.</p>
            <h2>Emit to the GEB Stream</h2>
            <h3>Directive: </h3>
            <ul>
                <li>
                    <pre v-highlightjs><code>v-geb-click-emit="{foo:'bar'}"</code></pre>
                    <button v-geb-click-emit="{foo:'bar'}">Send</button>
                </li>

            </ul>

            <h3>Methods</h3>
            <ul>
                <li><pre v-highlightjs><code>methods: {
            sendToBus: function () {
                this.$geb.emit({payload: this.payload})
            }
        }</code></pre>
                    <simpletobus></simpletobus>
                </li>

            </ul>
            <h2>Subscribe to the GEB stream</h2>
            <h3>Get all the events</h3>
            <div>
                <p>To get to the entire bus:</p>
                <pre v-highlightjs><code>this.$geb.getBus()</code></pre>
                <p>Then use .subscribe(cb) to pass a callback for each event</p>
                <ul>
                    <li><pre v-highlightjs><code>created: function () {
            this._sub = this.$geb.getBus().subscribe(data => {
                        console.log(data)
                        // do anything you want with data here
                    }
            )
        }</code></pre>
                    </li>
                </ul>
                <p>An example of this method use is the component logging all the bus data stream at the top of your
                    screen</p>
                <h3>Get only specific events</h3>
                <p>To make a component listening to specific events : </p>
                <p>In this example the components only listen to events with at least: {id:props.selector}</p>
                <tobus></tobus>
                <pre v-highlightjs><code>created: function () {
            this._sub = this.$geb.getFilteredBus({id: this.selector}).subscribe(data => {
                        console.log(data)
                        // do anything you want with data here
                    }
            )
        },</code></pre>
                <logidcomponent selector="foo"></logidcomponent>
                <logidcomponent selector="bar"></logidcomponent>
                <p>Tip: You can be add more props: {id:'someId', component:'modal'}</p>
                <pre v-highlightjs><code>created: function () {
            this._sub = this.$geb.getFilteredBus({id: this.selector,component:'modal'}).subscribe(data => {
                        console.log(data)
                        // do anything you want with data here
                    }
            )
        },</code></pre>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                inTarget: '',
                inPayload: ''
            }
        }
    }
</script>

<style>
    #app {
        padding-top: 60px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }

    h1, h2, h3, h4 {
        font-weight: normal;
        margin: 0.5em;
    }

    p {
        margin-left: 1em;
    }

    .noListStyle {
        list-style: none;
        padding-left: 0;
    }

    pre {
        margin: 0;
        margin-left: 1em;
    }

    ul {
        margin: 0;
    }

</style>
