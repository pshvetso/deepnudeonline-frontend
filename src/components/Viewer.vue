<template>
    <div v-if="this.isVisible" class="inline-viewer" @click="$emit('hide-viewer')">
        <div class="inline-viewer-centering">
            <img :src="imgSrc" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Viewer",
        props: {
            isVisible: Boolean,
            imgSrc: String
        },
    }
</script>

<style scoped>
    .inline-viewer {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.8);

        display: flex;
        justify-content: center;
    }

    .inline-viewer-centering {
        align-self: center;
        width: 80%;
        box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 1), 0px 0px 0px 5px #292929;
        border-radius: 2px;
    }

    .inline-viewer-centering img {
        width: 100%;
        border-radius: 2px;
    }

</style>