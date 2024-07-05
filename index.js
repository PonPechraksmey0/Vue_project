import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      userProfile: null,
    };
  },
  mutations: {
    login(state, profile) {
      state.isAuthenticated = true;
      state.userProfile = profile;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userProfile = null;
    },
  },
  actions: {
    login({ commit }, profile) {
      commit('login', profile);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
});

export default store;
