<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
.loading {
  position: absolute;
  border: 4px solid #8976f3;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: auto;
  animation: spin 2s linear infinite;
  filter: drop-shadow(0 0 0.4rem #8976f3);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
