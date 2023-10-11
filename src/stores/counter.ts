import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      x: 0
    }
  },
  getters: {
    double_x(): Number {
      return this.x
    }
  },
  actions: {
    increment() {
      this.x ++
    }
  }
})
