<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="$emit('toggle-sidebar')"></v-app-bar-nav-icon>
        <v-toolbar-title>Frontend Case</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Home</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
        };
    }
}
</script>

<style></style>