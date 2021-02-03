import * as types from "../mutation-types";
import { isNull, setDarkTheme } from "../../utilities/utils";

// state
export const state = {
  darkMode: localStorage.getItem("darkMode")
};

// mutations
export const mutations = {
  [types.SET_DARK_MODE](state, boolean) {
    state.darkMode = boolean;
    localStorage.setItem("darkMode", boolean);
  }
};

// getters
export const getters = {
  darkMode: state => {  
    return (state.darkMode == 'true');
  }
};

// actions
export const actions = {
  updateDarkMode({ commit, dispatch }, payload) {
    setDarkTheme(payload);
    commit(types.SET_DARK_MODE, payload);
  },
  checkDarkMode({ commit, dispatch }) {
    setDarkTheme(state.darkMode);
  }
};
