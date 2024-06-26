<template>
    <v-app>
        <!-- Navbar Component -->
        <NavBar @toggle-sidebar="toggleSidebar" />

        <!-- Sidebar Component -->
        <SideBar :drawer="drawer" @update:drawer="drawer = $event" />

        <!-- Content -->
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h1>User Detail</h1>
                        <v-card>
                            <v-card-title>
                                {{ user.name }}
                            </v-card-title>
                            <v-card-subtitle>
                                {{ user.username }}
                            </v-card-subtitle>
                            <v-card-text>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle>Address</v-list-item-subtitle>
                                        <v-list-item-title>{{ user.address.street }}, {{ user.address.suite }},
                                            {{ user.address.city }}, {{ user.address.zipcode }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle>Email</v-list-item-subtitle>
                                        <v-list-item-title>{{ user.email }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle>Phone</v-list-item-subtitle>
                                        <v-list-item-title>{{ user.phone }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle>Website</v-list-item-subtitle>
                                        <v-list-item-title>{{ user.website }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-subtitle>Company</v-list-item-subtitle>
                                        <v-list-item-title>{{ user.company.name }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
export default {
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
        ...mapGetters('users', ['getSelectedUser']),
        user() {
            return this.getSelectedUser;
        }
    },
    created() {
        const userId = this.$route.params.id;
        this.setSelectedUser(userId);
        this.fetchPosts(userId)
        this.fetchAlbums(userId)
    },
    methods: {
        ...mapActions('users', ['setSelectedUser']),
        ...mapActions('posts', ['fetchPosts']),
        ...mapActions('albums', ['fetchAlbums']),
        toggleSidebar() {
            this.drawer = !this.drawer;
        }
    }
};
</script>