import { defineStore } from 'pinia'

const useCountStore = defineStore('count', {
  state: () => ({
    count: 0
  }),

  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },

  actions: {
    increment(num: number) {
      this.count += num
    }
  }
})

export default useCountStore
