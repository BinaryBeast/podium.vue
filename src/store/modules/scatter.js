export default {
  state: {
    loggedIn: false,
    identity: {}
  },
  mutations: {
    login(state, identity) {
      console.log("mutation:login() state");
      console.log(state);
      console.log("mutation:login() identity");
      console.log(identity);
      state.loggedIn = true;
      state.identity = identity;
    },
  },
  actions: {
    login({ commit }, { identity }) {
      console.log("actions:login(): identity");
      console.log(identity);
      commit("login", identity);
    },
  },
  getters: {},
};
