<template>
    <div class="tobus">
        <p> Using this.$geb().emit(obj) method available in every Vue components:<br>
            <input v-model="target" @keyup.enter="sendToBus()" placeholder="Target : 'foo' example">
            <input v-model="payload" @keyup.enter="sendToBus()" placeholder="Payload">
            <button @click="sendToBus()" >Send</button>
        </p>
    </div>
</template>
<style>
.tobus{
    border: 1px solid lightgreen;
    padding: 1em;
    margin:0.5em;
}
</style>
<script>

    export default{
        name:'tobus',
        data(){
            return{
                target: '',
                payload: ''
            }
        },
        methods: {
            sendToBus: function(){
                this.$geb().emit({id:this.target,payload:this.payload})
                this.target = ''
                this.payload = ''
            }
        }
    }
</script>
