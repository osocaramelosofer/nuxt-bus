<script setup>
import {useViajesStore} from "../../store/viajesStore";

const store = useViajesStore()
const selectedViaje = ref(null)


onMounted(()=>{
  loadViajes()

})

const loadViajes = async()=> {
  await store.getViajes()
}

</script>

<template>
  <select
      v-if="store.viajes"
      id="viaje"
      v-model="selectedViaje"
      class=" bg-blue-400"
      @change="$emit('select-event', selectedViaje)"
  >
    <option v-for="viaje in store.viajes" :value="viaje">
      {{ `${viaje.trayecto.origen} - ${viaje.trayecto.destino}` }}
    </option>
  </select>
</template>