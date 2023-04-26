import { createStore } from "vuex";
import navigationModule from "./TheNavigation/index";
import indexModule from "./TheIndex/index";
import inputModule from "./TheInput/index";

const store = createStore({
  modules: {
    navigation: navigationModule,
    index: indexModule,
    input: inputModule,
  },
  // 透過state來控制全域變數(夜間模式)
  state() {
    return {
      isDarkMode: false,
    };
  },
  mutations: {
    changethemeMode(state, payload) {
      state.isDarkMode = payload;
    },
  },
  actions: {
    changeDarkMode(context) {
      context.commit("changethemeMode", true);
    },
    changeLightMode(context) {
      context.commit("changethemeMode", false);
    },
  },
  getters: {
    isDarkMode(state) {
      return state.isDarkMode;
    },
  },
});

export default store;
