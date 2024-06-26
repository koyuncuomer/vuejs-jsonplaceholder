<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Frontend Case</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <h1>Users</h1>
                <v-row>
                    <v-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4">
                        <v-card @click="goToUserDetails(user.id)">
                            <v-card-title>{{ user.name }}</v-card-title>
                            <v-card-subtitle>{{ user.email }}</v-card-subtitle>
                            <v-card-text>{{ user.company.name }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    name: 'HomeView',
    data() {
        return {
        };
    },
    components: {
    },
    computed: {
        ...mapGetters('users', ['getAllUsers', 'getSelectedUser']),
        users() {
            return this.getAllUsers;
        }
    },
    methods: {
        goToUserDetails(userId) {
            this.$router.push({ name: 'user-detail', params: { id: userId } });
        }
    },
};
</script>