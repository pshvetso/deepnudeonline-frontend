<template>
    <div v-if="this.visible" class="inline-viewer">

    </div>
</template>

<script>
    export default {
        name: "Viewer",
        data: () => ({
            visible: false,
        }),
    }
</script>

<style scoped>
    .inline-viewer {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        height: 100%;
        width: 100%;
        z-index: 9999;
    }
</style>