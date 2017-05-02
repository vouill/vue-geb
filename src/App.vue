<template>
  <div id="app">
    <a href="https://github.com/vouill/vue-geb"><img style="position: absolute; top: 0; right: 0; border: 0; z-index: 1000;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
    <div class="col">
      <LogAll></LogAll>
      <h1>Vue-geb plugin example</h1>
      <p>The Global Event Bus (GEB) is accessible to every Vue component.<br>
        From any component you can emit or receive data from the GEB.</p>
      <h2>Emit to the GEB Stream</h2>
      <h3>Directive: </h3>
      <ul>
        <li>
          <button v-geb-click-emit="{foo:'bar'}">Send</button>
        </li>

      </ul>

      <h3>Methods</h3>
      <ul>
        <li>
          <SimpleToBus></SimpleToBus>
        </li>
      </ul>
      <h3>Get only specific events</h3>
      <ToBus></ToBus>
      <LogId selector="foo"></LogId>
      <LogId selector="bar"></LogId>
    </div>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import LogAll from './components/logAllComponent.vue'
  import LogId from './components/logIdComponent.vue'
  import ToBus from './components/sendToBusComponent.vue'
  import SimpleToBus from './components/simpleToBus.vue'

  export default {
    name: 'app',
    components: {
      Hello,
      LogAll,
      LogId,
      ToBus,
      SimpleToBus
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
