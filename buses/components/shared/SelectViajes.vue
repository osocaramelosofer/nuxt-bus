<script setup>
import {useViajesStore} from "../../store/viajesStore";
import { NSelect } from "naive-ui";


const emit = defineEmits(['onViajeSelected', 'onSelected'])
const store = useViajesStore()
const selectedViaje = ref(null)
const options = ref([])

onMounted(async ()=>{
  await loadViajes()
  options.value = store.viajes
})

const computedOptions = computed(() => {
  return store.viajes.map(viaje =>{
    return {
      value: viaje.id,
      label: `${viaje.id}: ${viaje.trayecto.origen} - ${viaje.trayecto.destino}`,
      bus: viaje.bus.id,
      viaje: viaje.id
    }
  })
})

const loadViajes = async() => await store.getViajes()

const handleUpdateValue = (value, option) => {
  // console.log("value y option", value, option)
  emit('onSelected', option)
}
</script>

<template>
  <div>

    <select
        v-if="store.viajes"
        id="viaje"
        v-model="selectedViaje"
        class=" bg-blue-400"
        @change="$emit('onViajeSelected', selectedViaje)"
    >
      <option v-for="viaje in store.viajes" :value="viaje">
        {{ `${viaje.trayecto.origen} - ${viaje.trayecto.destino}` }}
      </option>
    </select>

    <n-select
        v-model:value="selectedViaje"
        :options="computedOptions"
        @update:value="handleUpdateValue"
    />

  </div>
</template>