import type { State } from './state';

export const getters = {
  doubleCount(state: State) {
    if (state.count <= 5) {
      return state.test
    }
    return state.count * 2;
  },
};
