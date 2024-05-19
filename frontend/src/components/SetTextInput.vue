<script lang="ts">
import socket from "../services/Socket";

export default {
    data() {
        return {
            text: "",
        };
    },
    watch: {
        text: () => {
            socket.emit("set_text", this.text?.toString() ?? "");
        },
    },
};
</script>

<template>
    <input
        v-model="text"
        type="text"
        placeholder="Enter text here..."
        class="w-4/5 rounded border-2 border-transparent bg-neutral-800 px-3 py-1 text-lg outline-none transition-colors duration-300 ease-out focus:border-neutral-300"
    />
</template>
