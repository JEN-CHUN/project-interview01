<template>
  <button class="button" :class="{ 'dark-mode': mode }">
    <slot>(記得輸入文字)</slot>
  </button>
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
.button {
  display: block;
  border-radius: 10px;
  min-width: 250px;
  min-height: 80px;
  cursor: pointer;
  background-color: rgb(254, 233, 207);
}

.button:hover {
  background-color: rgb(255, 224, 186);
}

.dark-mode {
  background-color: rgb(20, 192, 249) !important;
}

.dark-mode:hover {
  background-color: rgb(0, 186, 248) !important;
}
</style>
