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
            component: () => import("./components/Feed")
        },
        {
            path: "/upload",
            name: "Upload",
            component: () => import("./components/UploadForm")
        },
    ]
});
