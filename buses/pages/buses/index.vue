<script setup>
// importamos el store que queremos utilizar
import { useBusesStore } from "../../store/busesStore";

// obtenemos acceso a el
const store = useBusesStore()


</script>

<template>
  <div class="bg-white w-full flex justify-center items-center flex-col">
    <h1 class="text-center">Index Buses</h1>
<!--    <h2 class="text-center">{{ store.count }}</h2>-->

<!--    <button @click="store.getBuses" class="bg-orange-600 text-amber-50 p-3 rounded-md">increment count Store</button>-->
<!--    <button @click="store.increment" class="bg-green-600 text-amber-50 p-3 rounded-md">increment count Store</button>-->
<!--    <button @click="store.$reset()" class="bg-blue-600 text-amber-50 p-3 rounded-md">Reset Store</button>-->
    <BusesTable />
  </div>

</template>