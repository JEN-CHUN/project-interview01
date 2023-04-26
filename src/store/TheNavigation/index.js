import action from "./action";
import getter from "./getter";
import mutation from "./mutation";

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: mutation,
  actions: action,
  getters: getter,
};
