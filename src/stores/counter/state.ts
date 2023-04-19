import { ref } from "vue"

export interface State {
  count: number,
  test: string,
}

export const state = {
  count: ref(0),
  test: ref('hallo'),
}