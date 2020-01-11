<template>
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a href="/">Home</a>
        </li>
        <li v-for="(breadcrumb, id) in breadcrumbs" :key="id" class="breadcrumb-item active">
            <a :href="breadcrumb.link">{{breadcrumb.name}}</a>
        </li>
        <li class="breadcrumb-item active">
            {{$route.name}}
        </li>
    </ol>
</template>

<script>
    export default {
        name: "Breadcrumb",
        data: () => ({
            breadcrumbs: [],
        }),
        mounted () {
            this.update()
        },
        watch: {
            '$route' () {this.update()}
        },
        methods: {
            update() {
                this.breadcrumbs = this.$route.meta.breadcrumbs;
            }
        },
    }
</script>

<style scoped>
    .container .breadcrumb {
        background-color: transparent;
        border: 1px solid rgba(0,0,0,.125);
    }

</style>