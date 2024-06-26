import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import PostsView from "../views/PostsView.vue";
import AlbumsView from "../views/AlbumsView.vue";
import TodosView from "../views/TodosView.vue";
import CommentsView from "../views/CommentsView.vue";
import PhotosView from "@/views/PhotosView.vue";

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
        {
            path: "/albums",
            name: "albums",
            component: AlbumsView,
        },
        {
            path: "/todos",
            name: "todos",
            component: TodosView,
        },
        {
            path: "/comments",
            name: "comments",
            component: CommentsView,
        },
        {
            path: "/photos",
            name: "photos",
            component: PhotosView,
        }
    ],
});

export default router;
