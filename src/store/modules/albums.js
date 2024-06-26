import axios from "axios";

const state = {
    albums: [],
    loading: false,
};

const mutations = {
    setAlbums(state, albums) {
        state.albums = albums;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
};

const actions = {
    async fetchAlbums({ commit }, userId) {
        commit("setLoading", true);
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}/albums`
            );
            commit("setAlbums", response.data);
        } catch (error) {
            console.error("Error fetchAlbums:", error);
        } finally {
            commit("setLoading", false);
        }
    },
};

const getters = {
    getAllAlbumsByUser: (state) => state.albums,
    getLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
