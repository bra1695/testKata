<template>
  <div id="app">
    <NavbarApp />
    <div class="container px-5">
    <router-view></router-view> 
  </div>

  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue';

export default {
  components: {
    NavbarApp
  }
};
</script>
