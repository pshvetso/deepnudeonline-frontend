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

                //window.console.log("/api/top?interval=" + this.interval + "&page=" + this.page);
                axios
                    .get(this.apiUrl)
                    .then(response => {
                        this.isApiCallPending = false;
                        let data = response.data;
                        //window.console.log(data);

                        if (data.length > 0) {
                            this.posts.push(...data);
                            this.page++;
                        } else {
                            this.noMoreData = true;
                        }
                    })
                    .catch(error => {
                        this.errors.push(error);
                    });
            },
        },
    }
</script>
