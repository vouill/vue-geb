<template>
    <div class="tobus">
        <div>
            <ul>
                <li><label>Target: </label><input v-model="target" @keyup.enter="sendToBus()"
                                                  placeholder="'foo' or 'bar'">
                </li>
                <li><label>Payload: </label><input v-model="payload" @keyup.enter="sendToBus()"
                                                   placeholder="Anything you want"></li>
            </ul>
        </div>
        <div>
            <div>
                <button @click="sendToBus()">Send</button>
            </div>
        </div>

    </div>
</template>
<style>
    .tobus {
        display: inline-flex;
        border: 1px solid lightgreen;
        padding: 0.5em;
        margin: 0.5em;

    }

    .tobus li {
        display: block;
    }

    .tobus ul {
        padding:0;
    }
</style>
<script>

    export default{
        name: 'tobus',
        data(){
            return {
                target: '',
                payload: ''
            }
        },
        methods: {
            sendToBus: function () {
                this.$geb.emit({id: this.target, payload: this.payload})
            }
        }
    }
</script>
