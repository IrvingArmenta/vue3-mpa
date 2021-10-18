import { actionTree, getterTree, mutationTree, useAccessor } from "typed-vuex";
import { createStore } from "vuex";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type User = {
  id: number;
  name: string;
};

export enum ThemeNames {
  DARK_THEME = "dark-theme",
  LIGHT_THEME = "light-theme",
  EXTRA_THEME = "extra-theme",
}
export interface State {
  count: number;
  addArr: User[];
  theme: ThemeNames;
}

const state: State = {
  count: 0,
  addArr: [],
  theme: ThemeNames["LIGHT_THEME"],
};

const getters = getterTree(state, {
  double: (state) => state.count * 2,
});

const mutations = mutationTree(state, {
  increment: (state) => {
    state.count++;
  },
  addUser: (state, payload: User) => {
    state.addArr.push(payload);
  },
  setTheme: (state, theme: ThemeNames) => {
    state.theme = theme;
  },
});

const actions = actionTree(
  { state, getters, mutations },
  {
    increment({ commit }) {
      commit("increment");
    },
    asyncIncrement: async ({ commit }) => {
      await sleep(400);
      commit("increment");
    },
    addUser: ({ commit }, payload: User) => {
      commit("addUser", payload);
    },
    setTheme: ({ commit }, theme: ThemeNames) => {
      commit("setTheme", theme);
    },
  }
);

const storePattern = {
  state,
  getters,
  mutations,
  actions,
};

// define injection key
//export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore(storePattern);

export const useStore = useAccessor(store, storePattern);
