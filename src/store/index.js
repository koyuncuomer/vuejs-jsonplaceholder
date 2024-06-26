import { createStore } from "vuex";
import users from "./modules/users";
import posts from "./modules/posts";
import albums from "./modules/albums";
import todos from "./modules/todos";

const store = createStore({
    modules: {
        users,
        posts,
        albums,
        todos,
    },
});

export default store;
