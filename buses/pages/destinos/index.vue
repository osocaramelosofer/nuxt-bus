<script setup>
import { useDestinosStore} from "../../store/destinosStore";

const store = useDestinosStore()
// onMounted(() => {
//   store.getDestinos()
// })
</script>

<template>
  <div>
    <h1>Destinos index</h1>
    <DestinosAdd />
    <DestinosTable
        v-if="store.destinos.length > 0"
        :destinos="store.destinos"
    />
    <SharedModal
        v-else
        message="No hay destinos registrados todavia, intenta agregar un nuevo destino."
        urlImage="osomario"
    />
  </div>
</template>