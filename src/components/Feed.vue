<template>
    <div class="container-fluid">
{{feed}}
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Overview</li>
        </ol>

        <div class="card mb-3">
            <div class="post-header">
                <div><img src="../assets/img/u/jupiter-logo.png" /></div>
                <div class="post-user-date"><div class="user">Pasha Sukhoy</div><div class="date">11:59</div></div>
            </div>
            <div class="card-body">
                <p>Ashlee Cooper deep nude</p>
                <img src="../assets/img/u/deepnude-01.jpg">
            </div>
            <div class="card-footer">
                <div><i class="far fa-fw fa-heart"></i>123</div>
                <div><i class="far fa-fw fa-eye"></i>4321</div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="post-header">
                <div><img src="../assets/img/u/jupiter-logo.png" /></div>
                <div class="post-user-date"><div class="user">Pasha Sukhoy</div><div class="date">11:50</div></div>
            </div>
            <div class="card-body">
                <p>Britney Spears deep nude</p>
                <img src="../assets/img/u/deepnude-02.jpg">
            </div>
            <div class="card-footer">
                <div><i class="far fa-fw fa-heart"></i>78</div>
                <div><i class="far fa-fw fa-eye"></i>574</div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="post-header">
                <div><img src="../assets/img/u/jupiter-logo.png" /></div>
                <div class="post-user-date"><div class="user">Pasha Sukhoy</div><div class="date">11:35</div></div>
            </div>
            <div class="card-body">
                <p>Alicia Beethooven deep nude</p>
                <img src="../assets/img/u/deepnude-03.jpg">
            </div>
            <div class="card-footer">
                <div><i class="far fa-fw fa-heart"></i>201</div>
                <div><i class="far fa-fw fa-eye"></i>6547</div>
            </div>
        </div>

    </div>
    <!-- /.container-fluid -->
</template>

<script>
    import axios from 'axios';

export default {
    name: "Feed",
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
                .get("/api/feed")
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