<template>
    <div class="toBus">
        <ul class="noListStyle">
            <li><input v-model="payload" @keyup.enter="sendToBus()"
                       placeholder="Anything you want"></li>
        </ul>
        <div>
            <button class="" @click="sendToBus()">Send</button>
        </div>
    </div>
</template>
<style scoped>
    .toBus {
        display: inline-flex;
        border: 1px solid lightgreen;
        padding: 0.5em;
        margin: 0.5em;
        position: relative;
    }

    .btmright {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .tobus li {
        display: block;
    }
</style>
<script>

    export default{
        name: 'simpletobus',
        data(){
            return {
                payload: ''
            }
        },
        methods: {
            sendToBus: function () {
                this.$geb.emit({data: this.payload})
            }
        }
    }
</script>
