<script setup>
import {ref} from 'vue'
import {postPasajero} from "../../helpers/pasajeros";


const name = ref('')

const onSubmit = async()=> {
  const resp = await postPasajero(name.value)
}

</script>

<template>
  <form v-on:submit.prevent="onSubmit"
        class="cristal flex flex-col justify-center items-center">
    <div class="flex flex-col border-blue-400">
      <input type="text" v-model="name" placeholder="Nombre del pasajero">
<!--      <small>Introduce el nombre del pasajero</small>-->
    </div>
    <button class="bg-blue-500 px-10 rounded-xl">Enviar</button>
  </form>
</template>

<style>
.cristal{
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
}
</style>