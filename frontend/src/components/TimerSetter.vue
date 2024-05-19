<script lang="ts">
import socket from "../services/Socket";

export default {
    data() {
        return {
            times: {
                hours: {
                    first: 0,
                    second: 0,
                },
                minutes: {
                    first: 0,
                    second: 0,
                },
                seconds: {
                    first: 0,
                    second: 0,
                },
            },
        };
    },
    methods: {
        timeToSeconds() {
            const nowInMs = Date.now();
            const hours = parseInt(`${this.times.hours.first}${this.times.hours.second}`) * 3600 * 1000;
            const minutes = parseInt(`${this.times.minutes.first}${this.times.minutes.second}`) * 60 * 1000;
            const seconds = parseInt(`${this.times.seconds.first}${this.times.seconds.second}`) * 1000;
            return nowInMs + hours + minutes + seconds;
        },
        isValidTimeUnit(value) {
            return Number.isInteger(value) && value >= 0 && value <= 9;
        },
        validateTimes() {
            for (const unit of ["hours", "minutes", "seconds"]) {
                for (const part of ["first", "second"]) {
                    const value = this.times[unit][part];
                    if (!this.isValidTimeUnit(value)) {
                        return false;
                    }
                }
            }
            return true;
        },
    },
    watch: {
        times: {
            handler() {
                if (this.validateTimes()) {
                    socket.emit("set_timer", this.timeToSeconds());
                }
            },
            deep: true,
        },
    },
};
</script>

<template>
    <div class="flex flex-row items-center font-mono">
        <input v-model.number="times.hours.first" type="text" minlength="1" maxlength="1" class="number_select" />
        <input v-model.number="times.hours.second" type="text" minlength="1" maxlength="1" class="number_select" />

        <span class="text-4xl">:</span>

        <input v-model.number="times.minutes.first" type="text" minlength="1" maxlength="1" class="number_select" />
        <input v-model.number="times.minutes.second" type="text" minlength="1" maxlength="1" class="number_select" />

        <span class="text-4xl">:</span>

        <input v-model.number="times.seconds.first" type="text" minlength="1" maxlength="1" class="number_select" />
        <input v-model.number="times.seconds.second" type="text" minlength="1" maxlength="1" class="number_select" />
    </div>
</template>

<style scoped>
.number_select {
    @apply mx-0.5 h-12 w-12 rounded border-2 border-neutral-700 border-transparent bg-neutral-800 text-center text-4xl text-white caret-transparent outline-none transition-colors duration-300 ease-out focus:border-neutral-300;
}
</style>
