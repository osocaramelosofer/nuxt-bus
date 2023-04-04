<script setup>
import {ref} from 'vue'
import {postPasajero} from "../../helpers/pasajeros";
import {NButton, NInput} from 'naive-ui'

const emit = defineEmits(['onTyping'])

const props = defineProps({
  passenger: {type: String || Object},
})

const name = ref(null)

const onSubmit = async () => {
  const resp = await postPasajero(name.value)
  console.log(resp)
}

function onTypingEmit() {
  emit('onTyping', name)
}
</script>

<template>

  <n-input size="large" round
           placeholder="Nombre del pasajero"
           v-model:value="name"
           @keyup="onTypingEmit"
  />

</template>

<style>
.cristal {
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
}
</style>