import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Feed",
            component: () => import("./components/Feed"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
        {
            path: "/upload",
            name: "Upload",
            component: () => import("./components/UploadForm"),
            meta: {
                breadcrumbs: [
                    {name: "Top", path: "top"},
                ]
            }
        },
        {
            path: "/wall/:id",
            props: true,
            name: "Wall",
            component: () => import("./components/Wall"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
        {
            path: "/top/:interval",
            props: true,
            name: "Top",
            component: () => import("./components/Top"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
        {
            path: "/post/:id",
            props: true,
            name: "Post",
            component: () => import("./components/PostPage"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
        {
            path: "/contacts",
            name: "Contacts",
            component: () => import("./components/Contacts"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
    ]
});
