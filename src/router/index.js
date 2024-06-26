import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import PostsView from "../views/PostsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/user/:id",
            name: "user-detail",
            component: UserDetailView,
        },
        {
            path: "/posts",
            name: "posts",
            component: PostsView,
        },
    ],
});

export default router;
