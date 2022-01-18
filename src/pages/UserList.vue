<template>
  <div class="bg-gradient">
    <UserCard />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';

export default {
  components: {
    UserCard,
  },
};
</script>

<style scoped>
.bg-gradient {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
</style>
