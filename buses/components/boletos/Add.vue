<script setup>
import {ref} from 'vue'
import {postPasajero} from "../../helpers/pasajeros";


const name = ref('')

const onSubmit = async()=> {
  const resp = await postPasajero(name.value)
  console.log(resp)
}

</script>

<template>
  <form v-on:submit.prevent="onSubmit" class="bg-white">
    <p class="flex flex-col">
      <input type="text" v-model="name" placeholder="Nombre del pasajero">
      <small>Introduce el nombre del pasajero</small>
    </p>
    <button class="bg-green-200">Enviar</button>
  </form>
</template>