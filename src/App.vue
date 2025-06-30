<template>
  <router-view />
  <nav v-if="auth.currentUser"><router-link to="/">Home</router-link></nav>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/composables/fireInit'

const signedIn = ref(false);

function OnAuthStateChanged(state) {

}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 1em;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
