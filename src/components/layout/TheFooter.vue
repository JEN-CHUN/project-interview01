<template>
  <footer class="footer" :class="{ 'dark-nav-footer': isDarkMode }">
    <a class="footer__link" href="https://github.com/JEN-CHUN"
      >Click to Visit JEN-CHUN's GitHub for More Projects</a
    >
  </footer>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["isDarkMode"]);
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: rgb(255, 226, 185);
  padding: 2.4rem;
  &__link {
    font-size: 2rem;
  }
}
</style>
