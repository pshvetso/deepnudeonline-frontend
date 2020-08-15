<template>
    <div>
        <Viewer :isVisible="showViewer" :imgSrc="viewerImage" @hide-viewer="showViewer = false"></Viewer>
        <Post v-for="post in posts" :key="post.id" :post="post" @show-viewer="onShowViewer"></Post>
        <p v-if="errors.length">{{ errors }}</p>
    </div>
</template>

<script>
    import Post from './Post';
    import Viewer from './Viewer';
    import ScrollMixin from '../mixins/ScrollMixin';
    import CallApiMixin from '../mixins/CallApiMixin';
    import ViewerMixin from '../mixins/ViewerMixin';

    export default {
        name: "Feed",
        components: {
            Post, Viewer
        },
        mixins: [ScrollMixin, CallApiMixin, ViewerMixin],
        data: () => ({
            page: 0,
        }),
        computed: {
            apiUrl: function () {
                return "/api/feed?page=" + this.page
            }
        }
    };
</script>

<style scoped>

</style>
