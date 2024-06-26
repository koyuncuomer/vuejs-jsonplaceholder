import { createStore } from "vuex";
import users from "./modules/users";
import posts from "./modules/posts";
import albums from "./modules/albums";

const store = createStore({
    modules: {
        users,
        posts,
        albums
    },
});

export default store;
