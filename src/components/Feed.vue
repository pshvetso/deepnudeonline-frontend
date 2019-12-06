<template>
    <div class="container-fluid">
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Overview</li>
        </ol>

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
    <!-- /.container-fluid -->
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
    }),
    mounted() {
        this.callAPI();
    },
    methods: {
        callAPI() {
            axios
                .get("/api/feed?startFrom=")
                .then(response => {
                    this.feed = response.data;
                })
                .catch(error => {
                    //this.errors = err;
                    this.errors.push(error);
                });
        }
    }
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