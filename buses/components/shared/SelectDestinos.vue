<script setup>
import {useDestinosStore} from "../../store/destinosStore";

const store = useDestinosStore()
const selectedDestino = ref(null)


onMounted(()=>{
  loadDestinos()
})

const loadDestinos = async()=> {
  await store.getDestinos()
}

</script>

<template>
  <select
      v-if="store.destinos"
      id="destino"
      v-model="selectedDestino"
      class=" bg-blue-400">
    <option v-for="destino in store.destinos" :value="destino.id">
      {{ `${destino.origen} - ${destino.destino}` }}
    </option>
  </select>
</template>