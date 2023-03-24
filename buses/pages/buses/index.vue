<script setup>
// importamos el store que queremos utilizar
import { useBusesStore } from "../../store/busesStore";

// obtenemos acceso a el
const store = useBusesStore()


</script>

<template>
  <div class="px-10">
    <h1 class="text-4xl  text-center bg-white rounded-3xl mb-2">Buses</h1>
    <BusesAdd />
    <BusesTable />
  </div>

</template>