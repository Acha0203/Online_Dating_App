<template>
  <div class="container">
    <Messages />
  </div>
</template>

<script>
import Messages from '@/components/Messages.vue';

export default {
  name: 'MessageList',
  components: {
    Messages,
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
</style>
