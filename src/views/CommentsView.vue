<template>
    <v-app>
        <!-- Navbar Component -->
        <NavBar @toggle-sidebar="toggleSidebar" />

        <!-- Sidebar Component -->
        <SideBar :drawer="drawer" @update:drawer="drawer = $event" />

        <!-- Content -->
        <v-main>
            <v-container>
                <h1>Comments on {{user.name}}'s posts</h1>
                <v-row v-if="loading"><v-col><p>Loading...</p></v-col></v-row>
                <v-row v-else>
                    <v-col v-for="item in comments" :key="item.id" cols="12" sm="4" md="3">
                        <v-card>
                            <v-card-title>{{ item.name }}</v-card-title>
                            <v-card-subtitle>{{ item.email }}</v-card-subtitle>
                            <v-card-text>{{ item.body }}</v-card-text>
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
    name: 'CommentsView',
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
        ...mapGetters('comments', ['getAllCommentsByUser', 'getLoading']),
        ...mapGetters('users', ['getSelectedUser']),
        comments() {
            return this.getAllCommentsByUser;
        },
        loading() {
            return this.getLoading;
        },
        user() {
            if (this.getSelectedUser) {
                return this.getSelectedUser;
            } else {
                this.$router.push('/');
                return {}
            }
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