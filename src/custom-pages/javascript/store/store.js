import Vue from "vue";
import resumeModule from "./modules/resume-module.js";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    resumeModule
  }
});
