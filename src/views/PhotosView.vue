<template>
    <v-app>
        <!-- Navbar Component -->
        <NavBar @toggle-sidebar="toggleSidebar" />

        <!-- Sidebar Component -->
        <SideBar :drawer="drawer" @update:drawer="drawer = $event" />

        <!-- Content -->
        <v-main>
            <v-container>
                <h1>Photos on {{ user.name }}'s albums</h1>
                <v-row v-if="loading"><v-col>
                        <p>Loading...</p>
                    </v-col></v-row>
                <v-row v-else>
                    <v-col v-for="item in paginatedPhotos" :key="item.id" cols="12" sm="3" md="3">
                        <v-card>
                            <v-img height="200px" :src="item.thumbnailUrl" cover></v-img>
                            <v-card-title>{{ item.title }}</v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <div class="text-center">
                            <v-pagination v-model="page" :length="pageSize"></v-pagination>
                        </div>
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
    name: 'PhotosView',
    data() {
        return {
            drawer: true,
            page: 1,
            itemsPerPage: 12
        };
    },
    components: {
        NavBar,
        SideBar
    },
    computed: {
        ...mapGetters('photos', ['getAllPhotosByUser', 'getLoading']),
        ...mapGetters('users', ['getSelectedUser']),
        photos() {
            return this.getAllPhotosByUser;
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
        },
        pageSize() {
            return Math.ceil(this.photos.length / this.itemsPerPage)
        },
        paginatedPhotos() {
            const startIndex = (this.page - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.photos.slice(startIndex, endIndex)
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