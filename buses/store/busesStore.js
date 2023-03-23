import { defineStore } from 'pinia'
import { getBuses } from '@/helpers/buses'

export const useBusesStore = defineStore('buses', {
  state: () => {
    return {
      count: 0,
      name: 'Eduardo',
      isLoading: false,
      buses: [],
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,

  },
  actions: {
    async getBuses() {
      try{
        this.isLoading = true
        const { data } = await getBuses()
        this.buses = data
        this.isLoading = false
      }catch (e) {
        console.log(e)

      }
    },
    increment() {
      this.count++
    },
  },

})