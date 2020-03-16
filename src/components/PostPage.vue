<template>
    <Post v-if="post" :post="post"></Post>
</template>

<script>
    import axios from 'axios';
    import Post from './Post';

    export default {
        name: "PostPage",
        components: {
            Post
        },
        props: {
            id: Number
        },
        data: () => ({
            post: null,
            errors: [],
        }),
        // add previous page (/top, /wall, except /) to breadcrumbs
        beforeRouteEnter(to, from, next) {
            next(vm => {
                // access to component's instance using `vm`
                //window.console.log(from);
                //window.console.log(vm);

                const rootPath = "/";

                if((from.name != null) && (from.path != null) && (from.path != rootPath)) {
                    vm.$parent.$parent._route.meta.breadcrumbs.push(
                        {name: from.name, path: from.path}
                    )
                }
            })
        },
        mounted() {
            this.callAPI();
        },
        methods: {
            callAPI() {
                axios
                    .get("/api/post?id=" + this.id)
                    .then(response => {
                        this.post = response.data;
                    })
                    .catch(error => {
                        this.errors.push(error);
                    });
            },
        },
    }
</script>

<style scoped>

</style>