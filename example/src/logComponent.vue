<template>
    <div class="logComponent">
        <h2>I am a component with selector : <strong>{{selector}}</strong></h2>
        <p>
            Log :<br>
            {{logged}}
        </p>
        <tobus></tobus>
        <slot></slot>
    </div>
</template>
<style>
    .logComponent {
        border: 1px solid lightblue;
        padding: 1em;
        margin: 1em;
    }
</style>
<script>
    export default{
        created: function () {
            this.$geb().getBus().subscribe(data => {
                if (this.selector && this.selector === data.id) {
                    this.logged = data.payload
                    return
                }
                if (this.selector === 'all') {
                    this.logged = data.payload
                }
            })
        },
        data(){
            return {
                logged: ''
            }
        },
        props: ['selector']
    }
</script>
