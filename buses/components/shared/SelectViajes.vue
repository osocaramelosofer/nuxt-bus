<script setup>
import {useViajesStore} from "../../store/viajesStore";
import {NSelect} from "naive-ui";


const emit = defineEmits(['onViajeSelected'])
const store = useViajesStore()
const selectedViaje = ref(null)
const options = ref([])

onMounted(async () => {
  await loadViajes()
  options.value = store.viajes
})

const computedOptions = computed(() => {
  return store.viajes.map(viaje => {
    return {
      value: viaje.id,
      label: `${viaje.id}: ${viaje.trayecto.origen} - ${viaje.trayecto.destino}`,
      bus: viaje.bus.id,
      viaje: viaje.id
    }
  })
})

const loadViajes = async () => await store.getViajes()

const handleUpdateValue = (value, option) => {
  emit('onViajeSelected', option)
}
</script>

<template>

  <n-select
      v-model:value="selectedViaje"
      :options="computedOptions"
      @update:value="handleUpdateValue"
      filterable
  />


</template>