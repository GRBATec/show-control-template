<script lang="ts">
export default {
    data() {
        return {
            time: new Date().toTimeString().split(' ')[0]
        }
    },
    beforeMount() {
        setInterval(() => {
            this.time = new Date().toTimeString().split(' ')[0]
        }, 1000)
    }
};
</script>

<template>
<h1 class="font-bold text-center">
    {{time}}
</h1>
</template>