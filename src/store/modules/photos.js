import axios from "axios";

const state = {
    photos: [],
    loading: false,
};

const mutations = {
    setPhotos(state, photos) {
        state.photos = photos;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
};

const actions = {
    async fetchPhotos({ commit, rootGetters }) {
        commit("setLoading", true);
        try {
            const albums = rootGetters["albums/getAllAlbumsByUser"];
            const photosPromises = albums.map((album) =>
                axios.get(
                    `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
                )
            );
            //console.log('--photosPromises', photosPromises)

            const photosResponses = await Promise.all(photosPromises);
            const photos = photosResponses.flatMap(
                (response) => response.data
            );

            commit("setPhotos", photos);
        } catch (error) {
            console.error("Error fetchPhotos:", error);
        } finally {
            commit("setLoading", false);
        }
    },
};

const getters = {
    getAllPhotosByUser: (state) => state.photos,
    getLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
