<template>
    <div id="app" class="container">
        <div id="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Elevator></Elevator>
            <div id="content-wrapper">
                <div class="container-fluid">
                    <breadcrumb></breadcrumb>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Sidebar from "./components/Sidebar";
    import Breadcrumb from "./components/Breadcrumb";
    import Elevator from "./components/Elevator";

    export default {
        name: 'app',
        components: {
            Elevator,
            Breadcrumb,
            Sidebar,
            Navbar
        }
    }
</script>

<style>
    @import './assets/styles/fontawesome/css/all.min.css';

    body {
        line-height: 1.5;
        padding-top: 60px;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 1.75rem;
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 768px) {
        .large-media {
            display: none;
        }
    }

    .container .container-fluid {
        padding-right: 0;
    }

    #wrapper {
        display: flex;
    }

    #wrapper #content-wrapper {
        overflow-x: hidden;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 80px;
    }

    .text-gray-800 {
        color: #5a5c69 !important;
    }

    .btn.btn-bold {
        font-weight: 600;
    }

    .btn.btn-upper {
        text-transform: uppercase;
    }

    .btn.btn-brand {
        color: #fff;
        background-color: #5d78ff;
        border-color: #5d78ff;
    }

    .card .card-header {
        background-color: transparent;
        font-weight: 100;
        border-bottom: none;
        font-size: 1.2rem;
    }

    .card-body img {
        width: 100%;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        border: none;
    }

    .card-footer i {
        font-size: 1.4rem;
        margin-right: 0.4em;
    }

    .card-footer .fa-heart {
        color: #888;
    }

    .card-footer .fa-heart:hover {
        filter: brightness(125%);
    }

    .card-footer .fa-heart.liked {
        color: #e00;
    }

    .card-footer .fa-eye {
        color: gray;
    }


</style>
