<script lang="ts">
export default {
    props: {
        no_seconds: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            time: new Date().toTimeString().split(" ")[0],
        };
    },
    beforeMount() {
        setInterval(() => {
            this.time = new Date().toTimeString().split(":").slice(0, this.no_seconds ? 2 : 3).join(":").split(" ")[0];
        }, 1000);
    },
};
</script>

<template>
    <h1 class="text-center font-bold">
        {{ time }}
    </h1>
</template>
