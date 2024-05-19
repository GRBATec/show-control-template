<script lang="ts">
import socket from "../services/Socket";
import Clock from "./Clock.vue";
import Timer from "./Timer.vue";

type BeamerViewMode = "off" | "text" | "clock" | "timer" | "grb-text" | "atec-text";

export default {
    components: {
        Clock,
        Timer,
    },
    data() {
        return {
            text: "",
            mode: "off" as BeamerViewMode,
        };
    },
};
</script>

<template>
    <div class="flex h-20 w-full flex-row items-center justify-center gap-4 bg-black text-center">
        <Clock no_seconds class="font-mono text-7xl" v-if="mode === 'clock'" />

        <Timer :unix_end="text" class="font-mono text-7xl" v-if="mode === 'timer'" />

        <div class="flex w-full flex-row items-center" v-if="mode === 'grb-text'">
            <img src="GRB_Logo.png" class="aspect-square h-20" />
            <marquee class="flex-1 font-mono text-7xl" v-if="text.length > 40">
                {{ text }}
            </marquee>
            <span class="flex-1 text-7xl" v-else>
                {{ text }}
            </span>
            <img src="GRB_Logo.png" class="aspect-square h-20" />
        </div>

        <div class="flex w-full flex-row items-center" v-if="mode === 'atec-text'">
            <img src="ATec_black.jpg" class="aspect-square h-20" />
            <marquee class="flex-1 font-mono text-7xl" v-if="text.length > 40">
                {{ text }}
            </marquee>
            <span class="flex-1 text-7xl" v-else>
                {{ text }}
            </span>
            <img src="ATec_black.jpg" class="aspect-square h-20" />
        </div>

        <div class="flex w-full flex-row items-center" v-if="mode === 'text'">
            <marquee class="flex-1 font-mono text-7xl" v-if="text.length > 40">
                {{ text }}
            </marquee>
            <span class="flex-1 text-7xl" v-else>
                {{ text }}
            </span>
        </div>
    </div>
</template>
