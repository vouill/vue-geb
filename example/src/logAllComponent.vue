<template>
    <div class="logAll">
        <div>
            <p><strong>Bus Data Stream:</strong></p>
        </div>
        <div class="logArea">
            <ul class="noListStyle">
                <li v-for="log in logs.slice().reverse()">{{ log }}</li>
            </ul>
        </div>
    </div>
</template>
<style>
    .logAll {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        background-color: lightblue;
        display: flex;
        height: 75px;
        z-index: 10;
    }

    .logAll .logArea {
        background-color: #7BA6B4;
        flex-grow: 1;
    }

    .logAll div {
        padding: 0 1em;
        overflow-y: scroll;
    }
</style>
<script>
    export default {
        created: function () {
            this._sub = this.$geb.getBus().subscribe(data => {
                        this.logs.push(JSON.stringify(data))
                    }
            )
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
        }
    }
</script>
