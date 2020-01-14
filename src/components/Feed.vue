<template>
    <div>
        <Post v-for="post in feed" :key="post.id" :post="post"></Post>
        <p v-if="errors.length">{{ errors }}</p>
    </div>
</template>

<script>
    import axios from 'axios';
    import Post from './Post';

    export default {
        name: "Feed",
        components: {
            Post
        },
        data: () => ({
            feed: [],
            errors: [],
            startPostId: "",
            isApiCallPending: false,
            noMoreData: false,
        }),
        mounted() {
            this.callAPI();
        },
        methods: {
            callAPI() {
                if (this.isApiCallPending || this.noMoreData) {
                    return
                }

                this.isApiCallPending = true;

                //window.console.log("/api/feed?startFrom=" + this.startPostId);
                axios
                    .get("/api/feed?startFrom=" + this.startPostId)
                    .then(response => {
                        this.isApiCallPending = false;
                        let data = response.data;
                        //window.console.log(data);

                        if (data.length > 0) {
                            this.feed.push(...data);
                            this.startPostId = data[data.length - 1].id;
                        } else {
                            this.noMoreData = true;
                        }
                    })
                    .catch(error => {
                        this.errors.push(error);
                    });
            },
            handleScroll(/*event*/) {
                if ((window.innerHeight + window.scrollY) + 1 >= document.body.offsetHeight) {
                    //window.console.log("you're at the bottom of the page");
                    //window.console.log((window.innerHeight + window.scrollY) - document.body.offsetHeight);
                    this.callAPI();
                }

                //window.console.log(window.innerHeight +" " + window.scrollY +" "+ document.body.offsetHeight);
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
    };
</script>

<style scoped>

</style>