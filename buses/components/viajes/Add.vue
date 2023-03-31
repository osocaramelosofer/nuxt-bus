<script setup>
import { useViajesStore } from "@/store/viajesStore";
import { useDestinosStore } from "@/store/destinosStore";
import { useBusesStore } from "@/store/busesStore";
import { postViaje } from "@/helpers/viajes"

import { ref } from "vue";

const selectedBus = ref(null)
const selectedDestino = ref(null) // I think it's a number
const fechaSalida = ref(null)
const fechaLlegada = ref(null)

const viajeStore = useViajesStore()
const busStore = useBusesStore()
const destinoStore = useDestinosStore()

onMounted(()=>{
  getViajes()
  getDestinos()
  getBuses()
})

const onSubmit = async () => {
  try {
    const resp = await postViaje({
      fechaSalida: fechaSalida.value,
      fechaLlegada: fechaLlegada.value,
      trayecto: selectedDestino.value,
      bus: selectedBus.value
    })
  }catch (e) {
    console.log(e)
  }
}

const getViajes = async()=> {
   await viajeStore.getViajes()
}

const getDestinos = async()=> {
  await destinoStore.getDestinos()
}

const getBuses = async()=>{
  await busStore.getBuses()
}
</script>

<template>
  <form
      v-on:submit.prevent="onSubmit"
      class="bg-white flex flex-col"
  >
    <label for="fechaSalida">Fecha salida</label>
    <input id="fechaSalida" type="datetime-local" v-model="fechaSalida">

    <label for="fechaLlegada">Fecha llegada</label>
    <input id="fechaLlegada" type="datetime-local" v-model="fechaLlegada">

    <label for="bus">Destino</label>
    <select id="trayecto" v-model="selectedDestino" class=" bg-blue-400">
      <option v-for="destino in destinoStore.destinos" :value="destino.id">
        {{ `${destino.origen} - ${destino.destino}` }}
      </option>
    </select>

    <label for="bus">Bus</label>
    <select id="bus" v-model="selectedBus" class=" bg-yellow-400">
      <option v-for="bus in busStore.buses" :value="bus.id">
        {{ `placa: ${ bus.numero_placa }` }}
      </option>
    </select>

    <button class="save-button">Crear</button>
  </form>
</template>