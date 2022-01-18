<template>
  <div>
    <v-app-bar app color="indigo lighten-1" elevation="4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Online Dating App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--lighten-3"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>User List</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/message-list">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-chat-processing</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Message List</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
