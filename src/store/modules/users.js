import axios from "axios";

const state = {
    users: [],
    selectedUser: null,
};

const mutations = {
    setUsers(state, users) {
        state.users = users;
    },
    setSelectedUser(state, user) {
        state.selectedUser = user;
    },
};

const actions = {
    async fetchUsers({ commit }) {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            commit("setUsers", response.data);
        } catch (error) {
            console.error("Error fetchUsers:", error);
        }
    },
    setSelectedUser({ commit, state }, userId) {
        const user = state.users.find((user) => user.id === Number(userId));
        commit("setSelectedUser", user);
    },
};

const getters = {
    getAllUsers: (state) => state.users,
    getSelectedUser: (state) => state.selectedUser,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
