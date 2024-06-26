import axios from "axios";

const state = {
    todos: [],
    loading: false,
};

const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
};

const actions = {
    async fetchTodos({ commit }, userId) {
        commit("setLoading", true);
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}/todos`
            );
            commit("setTodos", response.data);
        } catch (error) {
            console.error("Error fetchTodos:", error);
        } finally {
            commit("setLoading", false);
        }
    },
};

const getters = {
    getAllTodosByUser: (state) => state.todos,
    getLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
