import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export function getNewStore(): any {
  return {
    state: {},
    mutations: {},
    actions: {},
    modules: {},
  };
}

export default new Vuex.Store(getNewStore());
