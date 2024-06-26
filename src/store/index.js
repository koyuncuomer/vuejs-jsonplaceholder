import { createStore } from "vuex";
import users from "./modules/users";
import posts from "./modules/posts";
import albums from "./modules/albums";
import todos from "./modules/todos";
import comments from "./modules/comments";
import photos from "./modules/photos";

const store = createStore({
    modules: {
        users,
        posts,
        albums,
        todos,
        comments,
        photos
    },
});

export default store;
