<template>
    <div class="card mb-3">
        <div class="post-header">
            <div><img :src="require(`@/assets/img/a/${post.userId}.png`)"/></div>
            <div class="post-user-date">
                <div class="user">
                    <router-link :to="{ name: 'Wall', params: { id: post.userId }}">
                        {{ post.firstName + ' ' + post.lastName }}
                    </router-link>
                </div>
                <div class="date">
                    <router-link :to="{ name: 'Post', params: { id: post.id }}">
                        <Format :value="post.date" fn="datetime"/>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{ post.title }}</p>
            <img :src="imgSrc" @click="$emit('show-viewer', imgSrc)">
        </div>
        <div class="card-footer">
            <div><i class="far fa-heart" :class="{ 'fa-fw': post.likes === 0, 'fas liked': post.likes > 0 }" @click="likePost(post)"></i>{{post.likes > 0 ? post.likes: ""}}</div>
            <div><i class="far fa-fw fa-eye"></i>{{post.views}}</div>
        </div>
    </div>
</template>

<script>
    import Format from './Format';
    import axios from 'axios';
    import helpers from '../lib/helpers.js';

    export default {
        name: "Post",
        components: {
            Format
        },
        props: {
            post: Object
        },
        data: () => ({
            errors: [],
        }),
        methods: {
            likePost(post) {
                if(post.likes === 0) {
                    axios
                        .post("/api/like", helpers.buildHttpParams({id: post.id}))
                        .then(() => {
                            post.likes++
                        })
                        .catch(error => {
                            this.errors.push(error);
                        });
                } else {
                    axios
                        .post("/api/dislike", helpers.buildHttpParams({id: post.id}))
                        .then(() => {
                            post.likes--
                        })
                        .catch(error => {
                            this.errors.push(error);
                        });
                }
            },
        },
        computed: {
            imgSrc: function () {
                return `/assets/img/u/${this.post.id}.jpg`;
            }
        }
    }
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

    .post-user-date .user a {
        color: black;
    }

    .post-user-date .date {
        font-size: 0.9em;
    }

</style>