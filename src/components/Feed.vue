<template>
    <div>
        <div v-for="post in feed" :key="post.id" class="card mb-3">
            <div class="post-header">
                <div><img :src="require(`@/assets/img/a/${post.userId}.png`)" /></div>
                <div class="post-user-date"><div class="user">{{ post.firstName + ' ' + post.lastName }}</div><div class="date"><Format :value="post.date" fn="datetime" /></div></div>
            </div>
            <div class="card-body">
                <p>{{ post.title }}</p>
                <img :src="require(`@/assets/img/u/${post.id}.jpg`)">
            </div>
            <div class="card-footer">
                <div><i class="far fa-fw fa-heart"></i>{{post.likes}}</div>
                <div><i class="far fa-fw fa-eye"></i>{{post.views}}</div>
            </div>
        </div>

        <p v-if="errors.length">{{ errors }}</p>

    </div>
</template>

<script>
    import axios from 'axios';
    import Format from './Format.vue';

export default {
    name: "Feed",
    components: {
        Format
    },
    data: () => ({
        feed: [],
        errors: [],
        startPostId: "",
        isApiCallPending: false,
        noMoreNews: false,
    }),
    mounted() {
        this.callAPI();
    },
    methods: {
        callAPI() {
            if(this.isApiCallPending || this.noMoreNews) {
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

                    if(data.length > 0) {
                        this.feed.push(...data);
                        this.startPostId = data[data.length - 1].id;
                    } else {
                        this.noMoreNews = true;
                    }
                })
                .catch(error => {
                    //this.errors = err;
                    this.errors.push(error);
                });
        },
        handleScroll (/*event*/) {
            if ((window.innerHeight + window.scrollY) + 1 >= document.body.offsetHeight) {
                //window.console.log("you're at the bottom of the page");
                //window.console.log((window.innerHeight + window.scrollY) - document.body.offsetHeight);
                this.callAPI();
            }

            //window.console.log(window.innerHeight +" " + window.scrollY +" "+ document.body.offsetHeight);
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
    .post-header {
        display: flex;
        padding-left: 1em;
        padding-top: 1em;
    }

    .post-user-date {
        padding-left: 0.8em;
    }

    .post-user-date .user {
        font-weight: 500;
    }

    .post-user-date .date {
        font-size: 0.9em;
    }


</style>