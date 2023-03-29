<script setup>
import { ref, reactive } from "vue";
import {useBusesStore} from "../../store/busesStore";
import {useDestinosStore} from "../../store/destinosStore";
import {useViajesStore} from "../../store/viajesStore";
import {putViaje} from "../../helpers/viajes";

const { params } = useRoute()

const destinoStore = useDestinosStore()
const busStore = useBusesStore()
const viajeStore = useViajesStore()



const viaje = reactive({})


onMounted(async()=>{
  await loadBuses()
  await loadDestinos()
  await loadViajes()
  viaje.value = viajeStore.getViaje(params.id)
})

const loadBuses= async()=> {
  await busStore.getBuses()
}
const loadDestinos = async()=> {
  await destinoStore.getDestinos()
}
const loadViajes = async()=>{
  await viajeStore.getViajes()
}

const updateViaje = async()=>{
  try {
    const resp = await putViaje(viaje.value)
    console.log(resp)
  }catch (e) {
    console.log(e)
  }
}

</script>

<template>

  <form
      v-on:submit.prevent="updateViaje()"
      v-if="viaje.value"
  >
    <div class="root">
      <h2>Editar Viaje</h2>
      <p>
        <input type="text" placeholder="Id" :value="viaje.value.id" disabled class="bg-gray-50 px-2"/>
      </p>
      <small>El id del viaje no se puede editar.</small>

      <p>
        <input type="datetime-local" placeholder="fecha llegada" v-model="viaje.value.fecha_llegada"  class="bg-gray-50 px-2"/>
      </p>
      <small>Introduce una nueva fecha de llegada.</small>

      <p>
        <input type="datetime-local" placeholder="fecha llegada" :value="viaje.value.fecha_salida"  class="bg-gray-50 px-2"/>
      </p>
      <small>Introduce una nueva fecha de salida.</small>

      <p>
        <label for="bus">Bus</label>
        <select id="bus" v-model="viaje.value.bus.id" class=" bg-blue-400">
          <option v-for="bus in busStore.buses" :value="bus.id">
            {{ `id: ${bus.id} numero de placa: ${bus.numero_placa}` }}
          </option>
        </select>
      </p>
      <small>Elige el bus que deseas actualizar.</small>

      <p>
        <label for="destino">Trayecto</label>
        <select id="destino" v-model="viaje.value.trayecto.id" class=" bg-blue-400">

          <option v-for="destino in destinoStore.destinos" :value="destino.id">
            {{ `De: ${destino.origen} - ${destino.destino}` }}
          </option>
        </select>
      </p>
      <small>Elige el bus que deseas actualizar.</small>

      <button class="save-button">Guardar</button>
    </div>
  </form>

</template>

<!--</script>-->
<style lang="css" scoped>
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}

small {
  color: #9d9d9d;
}

.save-button {
  background-color: #3498db;
  padding: 0 20px;
  margin-top: 10px;
  box-shadow: 0 10px #4f7da2;
  color: #fff;
}

.save-button:hover {
  box-shadow: 0 8px #3c6b7c;
  transform: translateY(1px);
}

.save-button:active {
  background-color: #376781;
  box-shadow: 0 5px #26586e;
  transform: translateY(4px);
}

#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 10px;
}
</style>
