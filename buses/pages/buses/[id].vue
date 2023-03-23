<script setup>
// importamos el store que queremos utilizar
import {useBusesStore} from "../../store/busesStore";

// obtenemos acceso a el
const store = useBusesStore()

const modify = () => store.$patch({
  count: store.count = 100
})

</script>

<template>
  <div class="bg-white w-full flex justify-center items-center flex-col">
    <h1 class="text-center text-3xl">Detalle de bus</h1>
    <h2 class="text-center">{{ store.count }}</h2>

    <button @click="modify()" class="bg-green-600 text-amber-50 p-3 rounded-md">Patch store</button>
    <button @click="store.$reset()" class="bg-blue-600 text-amber-50 p-3 rounded-md">Reset Store</button>
  </div>

</template>