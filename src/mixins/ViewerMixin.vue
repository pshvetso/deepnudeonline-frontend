<script>
    export default {
        data: () => ({
            showViewer: false,
            viewerImage: null,
        }),
        methods: {
            onShowViewer: function(viewerImage) {
                this.showViewer = true;
                this.viewerImage = viewerImage;
            }
        },
    }
</script>