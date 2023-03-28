import { defineStore } from 'pinia'
import { useDestinosStore } from '@/store/destinosStore'
import { useBusesStore } from '@/store/busesStore'
import { getViajes } from "~/helpers/viajes";

export const useViajesStore = defineStore('viajes', {
  state: ()=> {
    return {
      isLoading: false,
      viajes: [],
      errors: null
    }
  },
  getters:{},
  actions:{
    async getViajes() {
      try {
        const { data } = await getViajes()
        this.viajes = data
      }catch (e){
        this.erros = e
        console.log(e)
      }
    },
  }
})