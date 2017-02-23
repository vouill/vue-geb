<template>
  <div class="logId">
    <div>
      <p>Component with prop <br> selector: '<strong>{{this.selector}}</strong>'</p>
    </div>
    <div class="logArea">
      <ul class="noListStyle">
        <li v-for="log in logs.slice().reverse()">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>
<style>
  .logId {
    background-color: #77DD77;
    display: flex;
    color: white;
    margin: 1em 0;
    height: 80px;
    overflow-y: auto;
  }

  .logId .logArea {
    background-color: #78C485;
    flex-grow: 1;
  }

  .logId div {
    padding: 0 1em;
    overflow-y: auto;
  }

</style>
<script>
  export default {
    created: function () {
      this._sub = this.$geb.getFilteredBus({ id: this.selector }).subscribe(data => {
        this.logs.push(JSON.stringify(data))
      })
    },
    destroyed: function () {
      if (this._sub) {
        this._sub.unsubscribe()
      }
    },
    data () {
      return {
        logs: []
      }
    },
    props: ['selector']
  }
</script>
