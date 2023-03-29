import { defineStore } from 'pinia'
import { useDestinosStore } from '@/store/destinosStore'
import { useBusesStore } from '@/store/busesStore'
import { getViajes, retrieveViaje } from "~/helpers/viajes";

export const useViajesStore = defineStore('viajes', {
  state: ()=> {
    return {
      isLoading: false,
      viajes: [],
      errors: null,
      viaje: null
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
    deleteViaje(id){
      const viajeDeleted = this.viajes.findIndex(viaje => viaje.id === id)
      if (viajeDeleted !== -1) {
        this.viajes.splice(viajeDeleted, 1);
      }
    },
    getViaje(id){
      const viajeEcontrado = this.viajes.find(({id:viajeId})=>viajeId===parseInt(id))
      this.viaje = viajeEcontrado
      return viajeEcontrado
    }
  }
})