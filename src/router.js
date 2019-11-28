import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
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
