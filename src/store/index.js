import Vue from "vue";
import Vuex from "vuex";
import repositoryModule from "./modules/repository.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    repository: repositoryModule,
  },
});
