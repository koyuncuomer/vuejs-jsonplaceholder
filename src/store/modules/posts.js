import axios from "axios";

const state = {
    posts: [],
    loading: false,
};

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
};

const actions = {
    async fetchPosts({ commit, rootGetters }, userId) {
        commit("setLoading", true);
        try {
            // const selectedUser = rootGetters["users/getSelectedUser"];
            // if (selectedUser) {
            //     const userId = selectedUser.id;
            //     const response = await axios.get(
            //         `https://jsonplaceholder.typicode.com/users/${userId}/posts`
            //     );
            //     commit("setPosts", response.data);
            // } else {
            //     console.error("Selected user not found");
            // }

            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}/posts`
            );
            commit("setPosts", response.data);
        } catch (error) {
            console.error("Error fetchPosts:", error);
        } finally {
            commit("setLoading", false);
        }
    },
};

const getters = {
    getAllPostsByUser: (state) => state.posts,
    getLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
