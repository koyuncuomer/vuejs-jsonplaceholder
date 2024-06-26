<template>
    <v-navigation-drawer v-model="localDrawer" app>
        <v-list dense>
            <router-link v-for="(item, index) in items" :key="index" :to="item.route">
                <v-list-item :class="{ 'sidebar-active': $route.path === item.route }" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SideBar',
    props: ['drawer'],
    data() {
        return {
            items: [
                { title: 'Posts', icon: 'mdi-post', route: '/posts' },
                { title: 'Comments', icon: 'mdi-comment', route: '/comments' },
                { title: 'Albums', icon: 'mdi-image-album', route: '/albums' },
                { title: 'Photos', icon: 'mdi-image', route: '/photos' },
                { title: 'Todos', icon: 'mdi-check', route: '/todos' },
            ]
        };
    },
    computed: {
        localDrawer: {
            get() {
                return this.drawer;
            },
            set(value) {
                this.$emit('update:drawer', value);
            }
        }
    }
};
</script>

<style scoped>
.sidebar-active {
    background-color: #cbd3dd;
}

a {
    text-decoration: none;
}
</style>