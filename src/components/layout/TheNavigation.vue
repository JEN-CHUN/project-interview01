<template>
  <div class="container" :class="{ 'dark-nav-footer': isDarkMode }">
    <nav class="navbar">
      <div class="navbar__left">
        <router-link class="navbar__text word-space text-show" to="/"
          >快速小作業</router-link
        >
      </div>
      <div class="navbar__right">
        <router-link class="navbar__text word-space text-show" to="/"
          >首頁</router-link
        >
        <router-link class="navbar__text word-space text-show" to="/input"
          >輸出頁面</router-link
        >
        <router-link class="navbar__text word-space text-show" to="/sponsor"
          >API假贊助者</router-link
        >
        <p class="navbar__text word-space">
          <span class="mode" @click="changeDarkTheme" v-if="mode === false"
            >🤩</span
          >
          <span class="mode" @click="changeLightTheme" v-if="mode === true"
            >😎</span
          >
        </p>
        <div
          class="navbar__right__hamburger hamburger-show"
          :class="{ active: isActive }"
          @click="isActive = !isActive"
        >
          <span class="navbar__right__hamburger__bar"></span>
          <span class="navbar__right__hamburger__bar"></span>
          <span class="navbar__right__hamburger__bar"></span>
        </div>
      </div>
    </nav>
  </div>
  <div
    class="side-nav"
    :class="{ 'side-nav-open': isActive, 'dark-nav-footer': isDarkMode }"
  >
    <router-link class="side-nav__text" to="/" @click="sideActive"
      >首頁</router-link
    >
    <router-link class="side-nav__text" to="/input" @click="sideActive"
      >輸出頁面</router-link
    >
    <router-link class="side-nav__text" to="/sponsor" @click="sideActive"
      >API假贊助者</router-link
    >
    <p class="side-nav__text pointer" @click="sideActive">關閉目錄</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { defineProps } from "vue";

defineProps(["isDarkMode"]);

// 透過這裡來更改全域變數，切換夜間模式與日間模式
const store = useStore();
const changeDarkTheme = () => store.dispatch("changeDarkMode");
const changeLightTheme = () => store.dispatch("changeLightMode");

// 抓取store getters
const mode = computed(() => {
  return store.getters.isDarkMode;
});

// 用來控制Side Nav開啟與否的判斷
const isActive = ref(false);

// 切換Side Nav變數
function sideActive() {
  isActive.value = !isActive.value;
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(255, 226, 185);
}
.navbar {
  width: 1280px;
  margin: auto;
  padding: 3rem 5rem;
  height: 80px;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__right {
    display: flex;
    align-items: center;
    gap: 50px;

    &__hamburger {
      cursor: pointer;
      &__bar {
        display: block;
        width: 35px;
        height: 3px;
        margin: 7.5px 0;
        transition: all 0.3s ease-out;
        background-color: black;
      }
    }

    &__hamburger.active .navbar__right__hamburger__bar:nth-child(1) {
      transform: translateY(5.5px) rotate(45deg);
      width: 35px;
    }

    &__hamburger.active .navbar__right__hamburger__bar:nth-child(2) {
      display: none;
    }

    &__hamburger.active .navbar__right__hamburger__bar:nth-child(3) {
      transform: translateY(-5.5px) rotate(-45deg);
      width: 35px;
    }
  }

  &__text {
    font-size: 3rem;
  }
}

.side-nav {
  background-color: rgb(212, 125, 19);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15rem;

  text-align: center;
  overflow: hidden;
  width: 0;
  height: 0;
  transition: all 0.6s ease-out;
  &__text {
    font-size: 4rem;
  }
}

.side-nav-open {
  width: 100%;
  height: 100%;
}

.word-space {
  word-spacing: 0.6rem;
}

.hamburger-show {
  display: none;
}

.mode {
  cursor: pointer;
  user-select: none;
  font-size: 3.5rem;
}

@media (max-width: 1280px) {
  .navbar {
    width: 980px;
  }
}

@media (max-width: 981px) {
  .navbar {
    width: 700px;
    padding: 2rem 0;
  }
  .text-show {
    display: none;
  }

  .hamburger-show {
    display: block;
  }
}

@media (max-width: 750px) {
  .navbar {
    width: 500px;
    padding: 2rem 0;
  }
}

@media (max-width: 530px) {
  .navbar {
    width: 100%;
    padding: 2rem 5rem;
  }
}

@media (max-width: 400px) {
  .navbar {
    width: 100%;
    padding: 2rem 1rem;
  }
}
</style>
