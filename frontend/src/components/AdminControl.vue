<script lang="ts">
import ControlBtn from "./ControlBtn.vue";

export default {
    components: {
        ControlBtn,
    },
    data() {
        return {};
    },
};
</script>

<template>
    <section class="grid w-4/5 grid-cols-3 grid-rows-2 gap-3">
        <ControlBtn client:load label="No Content" wstarget="/beamer/show-clock" />
        <ControlBtn client:load label="Show Clock" wstarget="/beamer/show-clock" />
        <ControlBtn client:load label="Start Timer" wstarget="/beamer/show-clock" />
        <ControlBtn client:load label="Plain Text" wstarget="/beamer/show-clock" />
        <ControlBtn client:load label="GRB Text" wstarget="/beamer/show-clock" />
        <ControlBtn client:load label="ATec Text" wstarget="/beamer/show-clock" />
    </section>
    <span class="h-0.5 w-11/12 rounded bg-white opacity-50 last:hidden"></span>
    <input
        type="text"
        placeholder="Enter text here..."
        class="w-4/5 rounded border-2 border-transparent bg-neutral-800 px-3 py-1 text-lg outline-none transition-colors duration-300 ease-out focus:border-neutral-300"
    />
</template>
