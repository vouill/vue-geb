<template>
    <div id="app">
        <div>
            <h1>Vue-geb plugin example</h1>
            <p>
                This demo uses Vue-geb to pass a payload to any target you want <br>
                It' up to you to implement the logic you want behind every reception of event.<br>
                In selector matches the target, the targeted component will log the payload.<br>
                If the selector is all it will log everything.
            </p>
            <p> Every component can send an event to any other component, you can try from <strong>child</strong> to
                <strong>foo</strong> , or from <strong>child</strong> to <strong>doge</strong>.</p>
            <p> Using a custom click geb directive to <strong>'foo'</strong> saying <strong>'Lorem'</strong>:
                <button v-geb-click-emit="{id:'foo',payload:'Lorem'}">Send</button>
                <tobus></tobus>
            </p>
        </div>
        <div class="flexmos">
            <logcomponent selector="all"></logcomponent>
            <logcomponent selector="foo"></logcomponent>
            <logcomponent selector="bar">
                <logcomponent selector="doge"></logcomponent>
            </logcomponent>
            <logcomponent selector="parent">
                <logcomponent selector="child"></logcomponent>
            </logcomponent>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',

            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .flexmos {
        display: flex;
        flex-wrap: wrap;
    }
</style>
