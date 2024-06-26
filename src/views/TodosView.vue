<template>
    <v-app>
        <!-- Navbar Component -->
        <NavBar @toggle-sidebar="toggleSidebar" />

        <!-- Sidebar Component -->
        <SideBar :drawer="drawer" @update:drawer="drawer = $event" />

        <!-- Content -->
        <v-main>
            <v-container>
                <h1>{{ user.name }}'s Todos</h1>
                <p v-if="loading">Loading...</p>

                <v-table v-else>
                    <thead>
                        <tr>
                            <th class="text-left">
                                <b>Title</b>
                            </th>
                            <th class="text-left">
                                <b>Completed</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in todos" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.completed ? '&#10004;' : '&#10005;' }}</td>
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
    name: 'TodosView',
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
        ...mapGetters('todos', ['getAllTodosByUser', 'getLoading']),
        ...mapGetters('users', ['getSelectedUser']),
        todos() {
            return this.getAllTodosByUser;
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