<script setup>
import {reactive, ref} from "vue";
import {getAsientos} from "../../helpers/asientos";


const selectedBus = ref(0)
const asientos = ref([])
const selectedSeat = ref(0)
const selectedViaje = ref(0)

const onViajeSelected = async(viaje)=> {
  console.log("Viaje", viaje.id)
  selectedBus.value = viaje.bus.id
  selectedViaje.value = viaje.id
  const resp = await loadAsientos(selectedBus.value)
  console.log(resp)
}
const loadAsientos= async(busId)=>{
  try{
    const {data} =  await getAsientos(busId)
    asientos.value = data
  }catch (e) {
    console.log(e)
  }
}
const onSeatSelected = (seatSelected) => {
  selectedSeat.value = seatSelected
}

</script>

<template>
  <div>
    <h1>boleto</h1>
    <BoletosAdd />
    <form>
      <SharedSelectViajes @select-event="(viaje)=>onViajeSelected(viaje)"/>
      <AsientosLoadAsientos
          v-if="asientos"
          :asientos="asientos"
          :selectedSeat="selectedSeat"
          @some-event="onSeatSelected"
      />
    </form>

    <button @click="loadAsientos">ok
    </button>
  </div>
</template>