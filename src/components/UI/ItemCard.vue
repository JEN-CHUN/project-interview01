<template>
  <div class="item-card" :class="{ 'dark-mode': mode }">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const mode = computed(() => {
  return store.getters.isDarkMode;
});
</script>

<style lang="scss" scoped>
.item-card {
  background-color: rgb(214, 236, 255);
  width: 50rem;
  border-radius: 1rem;
  padding: 2rem 2rem;
}

.dark-mode {
  background-color: rgb(30, 104, 215) !important;
}
</style>
