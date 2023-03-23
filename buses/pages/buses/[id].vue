<!--<script setup>-->
<!--// importamos el store que queremos utilizar-->
<!--import {useBusesStore} from "../../store/busesStore";-->

<!--// obtenemos acceso a el-->
<!--const store = useBusesStore()-->

<!--const modify = () => store.$patch({-->
<!--  count: store.count = 100-->
<!--})-->

<!--</script>-->

<template>
  <div class="bg-white w-full flex justify-center items-center flex-col">
    <h1 class="text-center text-3xl">Detalle de bus</h1>

    <form v-on:submit.prevent="onSubmit">
      <div class="root">
        <h2>Editar conductor</h2>
        <p v-if="bus">
          <input type="text" placeholder="Nombre" :value="bus.id" disabled class="bg-gray-50 px-2" />
        </p>
        <small>El id no se puede editar.</small>

        <p>
          <input type="text" placeholder="Numero de placa" v-model.trim="editedBus.numero_placa"  />
        </p>
        <small>Este es el numero de placa actual, y puedes editarlo.</small>

        <p>
          <input type="number" placeholder="capacidad" v-model.trim="editedBus.capacidad"  />
        </p>
        <small>Esta es la capacidad del autobus, y puedes editarlo.</small>

        <button class="save-button">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import {getBus} from "../../helpers/buses";

export default{
  data(){
    return{
      bus: null,
      editedBus:{
        numero_placa: null,
        capacidad: null,
      }
    }
  },
  created() {
    this.getBusDetail(this.$route.params.id)
  },

  methods:{
    async getBusDetail( busId ){
      try{
        const { data } = await getBus(busId)
        this.bus = data

        this.editedBus.numero_placa = this.bus.numero_placa
        this.editedBus.capacidad = this.bus.capacidad
      }catch (e){ throw e}
    }
  }
}
</script>

<style>
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
small{
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
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);

  background-color: white;
  border-radius: 10px;
}
</style>