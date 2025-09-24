import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'zh' // 默认语言为中文
  },
  mutations: {
    // 设置语言
    SET_LANGUAGE(state, language) {
      state.language = language;
    }
  },
  actions: {
    // 切换语言
    toggleLanguage({ commit, state }) {
      const newLanguage = state.language === 'zh' ? 'en' : 'zh';
      commit('SET_LANGUAGE', newLanguage);
      // 可以在这里保存语言设置到localStorage
      localStorage.setItem('app_language', newLanguage);
    }
  },
  modules: {}
});