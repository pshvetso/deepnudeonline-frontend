<script>
    import axios from 'axios';

    export default {
        data: () => ({
            posts: [],
            errors: [],
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

                axios
                    .get(this.apiUrl)
                    .then(response => {
                        let data = response.data;

                        let len = data.length;

                        if (len > 0) {
                            this.posts.push(...data);
                            this.callDataAPI();
                            this.postId = data[len-1].id;
                        } else {
                            this.noMoreData = true;
                        }

                        this.isApiCallPending = false;
                    })
                    .catch(error => {
                        this.errors.push(error);
                    });
            },
            callDataAPI() {
                axios
                    .get(this.apiDataUrl)
                    .then(response => {
                        let data = response.data;

                        let len = data.length;
                        let postsLen = this.posts.length;

                        if (len > 0) {
                            for(var i = 1; i <= len; i++) {
                                if(this.posts[postsLen - i].id != data[len - i].id) {
                                    window.console.log("Posts.id not match data.id!");
                                }
                                // this.posts[postsLen - i].liked = data[len - i].liked;
                                // merge data objects with same keys
                                this.posts[postsLen - i] = Object.assign(
                                    {},
                                    this.posts[postsLen - i],
                                    data[len - i]
                                );
                            }

                            // update reactive data to force component update
                            this.posts = this.posts.concat([]);
                            window.console.log(this.posts);
                        }
                    })
                    .catch(error => {
                        this.errors.push(error);
                    });
            }
        },
    }
</script>
