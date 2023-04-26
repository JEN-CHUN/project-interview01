<template>
  <the-navigation :isDarkMode="isDarkMode"></the-navigation>
  <main class="main" :class="{ 'dark-mode': isDarkMode }">
    <router-view
      class="main-container"
      :class="{ 'dark-mode': isDarkMode }"
    ></router-view>
  </main>
  <the-footer :isDarkMode="isDarkMode"></the-footer>
</template>

<script setup>
import TheNavigation from "./components/layout/TheNavigation.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 從App.vue直接將isDarkMode的值透過props傳給各個component
const isDarkMode = computed(() => {
  return store.getters.isDarkMode;
});
</script>

<style lang="scss">
* {
  font-size: 10px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.main {
  flex: 1;
  padding-bottom: 30px;
}

.main-container {
  width: 1280px;
  margin: auto;
  margin-top: 100px;
}

a,
a:visited,
a:active {
  color: inherit;
}

.pointer {
  cursor: pointer;
}

.text-center {
  text-align: center;
}

.margin-auto {
  margin: auto;
}

.dark-nav-footer {
  background-color: rgb(49, 49, 49) !important;
  color: rgb(227, 227, 227);
}

.dark-mode {
  background-color: rgb(93, 93, 93) !important;
  color: rgb(227, 227, 227);
}
</style>

<style lang="scss" scoped>
* {
  background-color: rgb(241, 241, 241);
}
</style>
