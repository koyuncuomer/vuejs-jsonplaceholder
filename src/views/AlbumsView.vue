<template>
    <v-app>
        <!-- Navbar Component -->
        <NavBar @toggle-sidebar="toggleSidebar" />

        <!-- Sidebar Component -->
        <SideBar :drawer="drawer" @update:drawer="drawer = $event" />

        <!-- Content -->
        <v-main>
            <v-container>
                <h1>{{ user.name }}'s Albums</h1>
                <p v-if="loading">Loading...</p>

                <v-table v-else>
                    <thead>
                        <tr>
                            <th class="text-left">
                                <b>Title</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in albums" :key="item.id">
                            <td>{{ item.title }}</td>
                        </tr>
                    </tbody>
                </v-table>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
export default {
    name: 'AlbumsView',
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
        ...mapGetters('albums', ['getAllAlbumsByUser', 'getLoading']),
        ...mapGetters('users', ['getSelectedUser']),
        albums() {
            return this.getAllAlbumsByUser;
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