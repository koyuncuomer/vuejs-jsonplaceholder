import axios from "axios";

const state = {
    comments: [],
    loading: false,
};

const mutations = {
    setComments(state, comments) {
        state.comments = comments;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
};

const actions = {
    async fetchComments({ commit, rootGetters }) {
        commit("setLoading", true);
        try {
            const posts = rootGetters["posts/getAllPostsByUser"];

            const commentsPromises = posts.map((post) =>
                axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
                )
            );
            //console.log('--commentsPromises', commentsPromises)

            const commentsResponses = await Promise.all(commentsPromises);
            const comments = commentsResponses.flatMap(
                (response) => response.data
            );

            commit("setComments", comments);
        } catch (error) {
            console.error("Error fetchComments:", error);
        } finally {
            commit("setLoading", false);
        }
    },
};

const getters = {
    getAllCommentsByUser: (state) => state.comments,
    getLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
