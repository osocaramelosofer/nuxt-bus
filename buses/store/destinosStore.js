import {getDestinos} from "~/helpers/destinos";
import { defineStore } from 'pinia'

export const useDestinosStore = defineStore('destinos', {
  state: () => {
    return {
      destinos: [],
      isLoading: false,
      hasErrors: false,
      errors: ""
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getDestinos() {
      try {
        const { data } = await getDestinos()
        this.destinos = data
      } catch (e) {
        console.log(e)
        this.hasErrors = true
        this.errors = e
      }
    },
    loadDestinos( destinos ){
      this.destinos = destinos
    },
    deleteDestino(id){
      const destinoDeleted = this.destinos.findIndex(user => user.id === id)
      if (destinoDeleted !== -1) {
        this.destinos.splice(destinoDeleted, 1);
      }
    }
  }
  ,
})