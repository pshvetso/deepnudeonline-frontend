<template>
    <div>
        <ul class="sidebar navbar-nav">
            <div v-for="routes in links" v-bind:key="routes.id">
                <div v-if="routes.header" class="sidebar-heading">
                    {{routes.header}}
                </div>
                <router-link :to="routes.page" v-slot="{ href, isExactActive  }">
                    <li class="nav-item" :class="[isExactActive && 'active']">
                        <a :href="href" class="nav-link">
                            <i class="fa-fw" :class="`${routes.class}`"></i>
                            <span>{{ routes.text }}</span>
                        </a>
                    </li>
                </router-link>
                <hr v-if="routes.hr" class="sidebar-divider" v-bind:key="routes.id">
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data: () => ({
            links: [
                {
                    id: 0,
                    text: 'My page',
                    page: '/mypage',
                    class: 'far fa-address-card',
                },
                {
                    id: 1,
                    text: 'Feed',
                    page: '/',
                    class: 'fal fa-badge-dollar',
                    hr: true,
                },
                {
                    id: 2,
                    text: 'Today',
                    page: {path: '/top/day'},
                    class: 'fas fa-angle-double-up',
                    header: "Top",
                },
                {
                    id: 3,
                    text: 'Week',
                    page: {path: '/top/week'},
                    class: 'fas fa-angle-double-up',
                },
                {
                    id: 4,
                    text: 'Month',
                    page: {path: '/top/month'},
                    class: 'fas fa-angle-double-up',
                },
                {
                    id: 5,
                    text: 'All time',
                    page: {path: '/top/alltime'},
                    class: 'fas fa-arrow-up',
                    hr: true,
                },
            ]
        }),
    }
</script>

<style scoped>
    .sidebar {
        width: 90px !important;
        background-color: #e9ecef;
        min-height: calc(100vh - 56px);
        margin-top: 16px;
        border-radius: .25rem;
        border-top: 3px #94ff99 solid;
    }

    .sidebar .nav-item:hover {
        background-color: #ff253a !important;
    }

    .sidebar .nav-item.active {
        background-color: white;
        border-left: 1px lightgray dashed;
        border-right: 1px lightgray dashed;
    }

    .sidebar .nav-item.active .nav-link {
        color: black;
        font-weight: 500;
    }

    .sidebar .nav-item .nav-link {
        text-align: center;
        padding: 0.75rem 1rem;
        width: 90px;
        color: #818181;
    }

    .sidebar .nav-item .nav-link:active,
    .sidebar .nav-item .nav-link:focus,
    .sidebar .nav-item .nav-link:hover {
        color: white;
    }

    .sidebar .nav-item .nav-link span {
        font-size: 0.65rem;
        display: block;
    }

    .sidebar .nav-item.active .nav-link span,
    .sidebar .nav-item .nav-link:active span {
        color: black;
    }

    .sidebar .nav-item .nav-link i {
        font-size: 1rem;
        color: #bebebe;
    }

    .sidebar .nav-item.active .nav-link i {
        color: black;
    }

    .sidebar.toggled {
        width: 0 !important;
        overflow: hidden;
    }

    hr.sidebar-divider {
        border-top: 1px solid lightgray;
        margin: 0 1rem 1rem;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    .sidebar-heading {
        color: #bebebe;
        padding: 0 1rem;
        font-weight: 800;
        font-size: .65rem;
        text-transform: uppercase !important;
        text-align: center;
    }

    @media (min-width: 768px) {
        .sidebar {
            width: 225px !important;
        }

        .sidebar .nav-item .nav-link {
            display: block;
            text-align: left;
            padding: 1rem;
            width: 225px;
        }

        .sidebar .nav-item .nav-link span {
            font-size: 0.85rem;
            display: inline;
            padding-left: .7rem;
        }

        .sidebar .nav-item .nav-link i {
            padding-left: .5rem;
        }

        .sidebar.toggled {
            overflow: visible;
            width: 90px !important;
        }

        .sidebar.toggled .nav-item .nav-link {
            text-align: center;
            padding: 0.75rem 1rem;
            width: 90px;
        }

        .sidebar.toggled .nav-item .nav-link span {
            font-size: 0.65rem;
            display: block;
        }

        .sidebar-heading {
            text-align: left;
        }
    }


</style>