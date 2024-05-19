<script lang="ts">
export default {
    props: {
        unix_end: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            time: "00:00:00",
        };
    },
    beforeMount() {
        setInterval(() => {
            const now = Date.now();
            const end = parseInt(this.unix_end);
            const diff = end - now;
            if (diff <= 0) {
                this.time = "00:00:00";
                return;
            }
            const hours = Math.floor(diff / 1000 / 60 / 60);
            const minutes = Math.floor(diff / 1000 / 60) % 60;
            const seconds = Math.floor(diff / 1000) % 60;

            if (minutes >= 5) {
                this.time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
                return;
            }
            this.time = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }, 1000);
    },
};
</script>

<template>
    <h1 class="text-center font-bold">
        {{ time }}
    </h1>
</template>
