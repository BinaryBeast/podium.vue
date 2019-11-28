import Vue from "vue";
import Vuex from "vuex";

import scatter from "store/modules/scatter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    scatter
  }
});
