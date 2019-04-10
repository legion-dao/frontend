<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Cheese />
  </div>
</template>

<script>
// @ is an alias to /src
import Cheese from '@/components/Cheese.vue';

export default {
  name: 'home',
  components: {
    Cheese,
  },
};
</script>
