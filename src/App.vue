<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div id="app">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </div>
</template>

<style scoped></style>
