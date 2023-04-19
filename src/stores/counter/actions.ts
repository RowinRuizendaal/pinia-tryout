// import type { State } from './state';
import { state } from "./state";


export const actions = {
  increment(amount: number) {
    console.log('increment', amount);
    state.count.value = state.count.value + amount;
  }
};
