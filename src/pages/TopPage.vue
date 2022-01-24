<template>
  <div class="bg-gradient">
    <p class="dark-purple large-font">Wellcome to</p>
    <p class="dark-purple large-font">Online Dating App</p>
    <router-link :to="`/user`">
      <v-btn color="indigo lighten-1" class="my-3 mx-2 white--text">
        Show All Users
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
};
</script>

<style scoped>
.bg-gradient {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#7a80d6, #fff7eb);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.large-font {
  font-size: 1.5rem;
}
</style>
