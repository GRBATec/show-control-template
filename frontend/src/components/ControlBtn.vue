<script lang="ts">
import socket from "../services/Socket";

export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        wstarget: {
            type: String,
            required: true,
        },
        wsargs: {
            type: Object,
            default: undefined,
        },
    },
    methods: {
        sendAction() {
            socket.emit(this.wstarget, this.wsargs);
        },
    },
};
</script>

<template>
    <button
        @click="sendAction"
        class="font-semi-bold rounded border-2 border-transparent bg-neutral-800 px-3 py-1 text-lg transition-colors duration-300 ease-out hover:border-neutral-300 active:border-neutral-300"
    >
        {{ label.toUpperCase() }}
    </button>
</template>
