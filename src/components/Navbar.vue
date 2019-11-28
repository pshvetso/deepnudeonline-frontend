<template>
    <nav class="navbar navbar-fixed-top">
        <div class="container">
            <div class="navbar-brand">
                <a href="/"><img src="../assets/img/logo.png" width="31"/></a>
                deepnudeonline
            </div>
            <div class="navbar-button">
                <a href="/upload" type="button" class="btn btn-outline-primary">
                    <i class="fas fa-fw fa-arrow-alt-from-bottom"></i>
                    Upload
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar {
        background-color: #343a40;
        color: white;
        border-top: 3px #007bff solid;
        height: 60px;
    }

    .navbar .navbar-brand {
        padding-top: 0.1rem;
    }

    .navbar .navbar-brand a {
        padding-right: 4px;
    }

    @media (min-width: 768px) {
        .navbar-nav .form-inline .input-group {
            width: auto;
        }
    }

    .navbar-fixed-top,
    .navbar-fixed-bottom {
        /* Fix the top/bottom navbars when screen real estate supports it */
        position: fixed;
        z-index: 1030;
        left: 0;
        width: 100%;
    }

    .navbar-fixed-top {
        top: 0;
    }

</style>