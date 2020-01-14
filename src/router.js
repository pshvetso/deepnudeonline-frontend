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
            path: "/mypage",
            name: "My page",
            component: () => import("./components/MyPage"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
        {
            path: "/top",
            name: "Top",
            component: () => import("./components/Top"),
            meta: {
                breadcrumbs: [
                ]
            }
        },
        {
            path: "/post/:id",
            name: "Post",
            component: () => import("./components/PostPage"),
            props: true,
            meta: {
                breadcrumbs: [
                ]
            }
        },
    ]
});
