<template>
  <div data-theme="cupcake" class="flex flex-col justify-center items-center">
    <Navbar></Navbar>
    <div class="h-screen w-screen">
      <router-view />
    </div>
    <div class="w-screen flex flex-col items-center bg-base-200">
<!--      <Footer></Footer>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navbar, Footer } from './components';
</script>

<style scoped>
</style>