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
    },
    methods: {
        sendAction() {
            socket.emit(this.wstarget);
        },
    },
};
</script>

<template>
    <button
        @click="sendAction"
        class="font-semi-bold rounded border-2 border-transparent bg-neutral-800 px-3 py-1 text-lg transition-colors duration-300 ease-out hover:border-neutral-300"
    >
        {{ label }}
    </button>
</template>
