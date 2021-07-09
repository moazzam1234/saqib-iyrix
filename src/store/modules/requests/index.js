// import getters from "../coaches/getters";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,

  state() {
    return {
      requests: [],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
