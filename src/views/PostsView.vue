<template>
    <v-app>
        <!-- Navbar Component -->
        <NavBar @toggle-sidebar="toggleSidebar" />

        <!-- Sidebar Component -->
        <SideBar :drawer="drawer" @update:drawer="drawer = $event" />

        <!-- Content -->
        <v-main>
            <v-container>
                <h1>{{user.name}}'s Posts</h1>
                <v-row v-if="loading"><v-col><p>Loading...</p></v-col></v-row>
                <v-row v-else>
                    <v-col v-for="post in posts" :key="post.id" cols="12" sm="4" md="3">
                        <v-card>
                            <v-card-title>{{ post.title }}</v-card-title>
                            <v-card-text>{{ post.body }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
export default {
    name: 'PostsView',
    data() {
        return {
            drawer: true,
        };
    },
    components: {
        NavBar,
        SideBar
    },
    computed: {
        ...mapGetters('posts', ['getAllPostsByUser', 'getLoading']),
        ...mapGetters('users', ['getSelectedUser']),
        posts() {
            return this.getAllPostsByUser;
        },
        loading() {
            return this.getLoading;
        },
        user() {
            return this.getSelectedUser;
        }
    },
    created() {

    },
    methods: {
        toggleSidebar() {
            this.drawer = !this.drawer;
        }
    }
};
</script>