<script setup>
import {ref} from "vue";
import {getAsientos} from "../../helpers/asientos";
import {postBoleto} from "../../helpers/boletos";
import {postPasajero} from "../../helpers/pasajeros";
import {NButton} from "naive-ui";
import CustomButton from "../../components/shared/CustomButton";

const selectedBus = ref(0)
const asientos = ref([])
const selectedSeat = ref(0)
const selectedViaje = ref(0)
const passengerName = ref(null)


const onViajeSelected = async (viaje) => {
  selectedBus.value = viaje.bus
  selectedViaje.value = viaje.viaje
  await loadAsientos(selectedBus.value)
}

const loadAsientos = async (busId) => {
  try {
    const {data} = await getAsientos(busId)
    asientos.value = data
  } catch (e) {
    console.log(e)
  }
}
const onSeatSelected = (seatSelected) => {
  console.log("asiento", seatSelected)
  selectedSeat.value = seatSelected
}

const setPassengerName = (passenger) => {
  passengerName.value = passenger.value
  console.log("Name ", passengerName.value)
}

const addBoleto = async () => {
  try {
    const {data: pasajero} = await postPasajero(passengerName.value)
    const boleto = {
      "pasajero": {
        "id": pasajero.id
      },
      "asiento": {
        "bus": selectedBus.value,
        "numero": selectedSeat.value,
        "estado": "ocupado"
      },
      "corrida": selectedViaje.value
    }
    const resp = await postBoleto(boleto)
    console.log("Si se pudo ?", resp)
  } catch (e) {
    console.log(e)
  }
}
//TODO:
// tenemos que mandar el id del pasajero (quien ya se debio de haber creado) para poder anadir un boleto: DONE
// si ya no hay asientos disponibles no mostrar el autobus
//
</script>

<template>
  <div>
    <h1>boleto</h1>

    <div class="form-container px-16 flex flex-col justify-center items-center gap-5 py-10 mx-10">
      <BoletosAdd
          :passenger="passengerName"
          @on-typing="setPassengerName"
      />

      <SharedSelectViajes
          @on-viaje-selected="( viaje ) => onViajeSelected( viaje )"
      />
      <AsientosLoadAsientos
          v-if="asientos"
          :asientos="asientos"
          :selectedSeat="selectedSeat"
          @on-seat-selected="onSeatSelected"
      />

      <CustomButton :onClick="addBoleto">
        Enviar
      </CustomButton>
    </div>
  </div>
</template>

<style>
.form-container{
  background: rgba(255, 255, 255, 0.52);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
}
</style>