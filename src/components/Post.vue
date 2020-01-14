<template>
    <div class="card mb-3">
        <div class="post-header">
            <div><img :src="require(`@/assets/img/a/${post.userId}.png`)"/></div>
            <div class="post-user-date">
                <div class="user">{{ post.firstName + ' ' + post.lastName }}</div>
                <div class="date">
                    <router-link :to="{ name: 'Post', params: { id: post.id }}">
                        <Format :value="post.date" fn="datetime"/>
                    </router-link>
                </div>
            </div>
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
</template>

<script>
    import Format from './Format.vue';

    export default {
        name: "Post",
        components: {
            Format
        },
        props: ['post']
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

    .post-user-date .date {
        font-size: 0.9em;
    }

</style>