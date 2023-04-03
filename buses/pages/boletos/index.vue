<script setup>
import {reactive, ref} from "vue";
import {getAsientos} from "../../helpers/asientos";


const selectedBus = ref(0)
const asientos = ref([])
const selectedSeat = ref(0)
const selectedViaje = ref(0)
const passengerName = ref(null)


const onViajeSelected = async(viaje)=> {
  console.log("trip ",viaje)
  selectedBus.value = viaje.bus.id
  selectedViaje.value = viaje.id
  await loadAsientos(selectedBus.value)
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
  console.log("asiento", seatSelected)
  selectedSeat.value = seatSelected
}

const setPassengerName = (passenger) =>{
  passengerName.value = passenger.value
  console.log("Name ",passengerName.value)
}

const xd = (viaje) =>{
  console.log("Bus ID => ",viaje.bus)
  console.log("Viaje ID =>",viaje.viaje)

  selectedBus.value = viaje.bus
  selectedViaje.value = viaje.viaje
}
</script>

<template>
  <div>
    <h1>boleto</h1>
    <BoletosAdd
        :passenger="passengerName"
        @on-typing="setPassengerName"
    />
    <form>
      <SharedSelectViajes
          @on-viaje-selected="( viaje ) => onViajeSelected( viaje )"
          @on-selected="xd"
      />
      <AsientosLoadAsientos
          v-if="asientos"
          :asientos="asientos"
          :selectedSeat="selectedSeat"
          @on-seat-selected="onSeatSelected"
      />
    </form>

    <button @click="loadAsientos">ok
    </button>
  </div>
</template>