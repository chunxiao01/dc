<script setup lang="ts">
import Navbar from "@/components/common/Navbar.vue"
import Tabbar from "@/components/common/Tabbar.vue"
</script>

<template>
  <div class="main">
    <Navbar />
    <RouterView />
    <Tabbar />
  </div>
</template>

<style scoped></style>
