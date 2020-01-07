<template>
    <div>
        <ul class="sidebar navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
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

    .sidebar .nav-item:last-child {
        margin-bottom: 1rem;
    }

    .sidebar .nav-item .nav-link {
        text-align: center;
        padding: 0.75rem 1rem;
        width: 90px;
    }

    .sidebar .nav-item .nav-link span {
        font-size: 0.65rem;
        display: block;
    }

    .sidebar .nav-item .dropdown-menu {
        position: absolute !important;
        -webkit-transform: none !important;
        transform: none !important;
        left: calc(90px + 0.5rem) !important;
        margin: 0;
    }

    .sidebar .nav-item .dropdown-menu.dropup {
        bottom: 0;
        top: auto !important;
    }

    .sidebar .nav-item.dropdown .dropdown-toggle::after {
        display: none;
    }

    .sidebar .nav-item .nav-link {
        color: #a1a0a0;
    }

    .sidebar .nav-item.active .nav-link {
        color: black;
        font-weight: 500;
    }

    .sidebar .nav-item .nav-link:active, .sidebar .nav-item .nav-link:focus, .sidebar .nav-item .nav-link:hover {
        color: #707070;
    }

    .sidebar.toggled {
        width: 0 !important;
        overflow: hidden;
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
            font-size: 1rem;
            display: inline;
        }

        .sidebar .nav-item .dropdown-menu {
            position: static !important;
            margin: 0 1rem;
            top: 0;
        }

        .sidebar .nav-item.dropdown .dropdown-toggle::after {
            display: block;
        }

        .sidebar.toggled {
            overflow: visible;
            width: 90px !important;
        }

        .sidebar.toggled .nav-item:last-child {
            margin-bottom: 1rem;
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

        .sidebar.toggled .nav-item .dropdown-menu {
            position: absolute !important;
            -webkit-transform: none !important;
            transform: none !important;
            left: calc(90px + 0.5rem) !important;
            margin: 0;
        }

        .sidebar.toggled .nav-item .dropdown-menu.dropup {
            bottom: 0;
            top: auto !important;
        }

        .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {
            display: none;
        }
    }


</style>