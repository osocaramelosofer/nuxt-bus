<!--<script setup>-->
<!--import { reactive, onMounted } from 'vue'-->
<!--import {useBusesStore} from "../../store/busesStore";-->

<!--const busesStore = useBusesStore()-->


<!--onMounted(()=>{-->
<!--  busesStore.getBuses()-->
<!--  const buses2 = reactive(busesStore.buses)-->

<!--})-->

<!--</script>-->

<template>
  <div  class="flex flex-col container">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light w-full">
            <thead
                class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" class=" px-6 py-4">#</th>
              <th scope="col" class=" px-6 py-4">Numero de Placa</th>
              <th scope="col" class=" px-6 py-4">Chofer</th>
              <th scope="col" class=" px-6 py-4">Capacidad</th>
              <th scope="col" class=" px-6 py-4">Editar</th>
              <th scope="col" class=" px-6 py-4">Eliminar</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="bus in buses" :key="bus.id"
                class="border-b dark:border-neutral-500"
            >
              <td class="whitespace-nowrap  px-6 py-4 font-medium">{{ bus.id }}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ bus.numero_placa }}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ bus.chofer ? bus.chofer.nombre : '' }}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ bus.capacidad }}</td>
              <td class="whitespace-nowrap  px-6 py-4">
                <nuxt-link
                    :to="`/buses/${bus.id}`"
                    class="w-full h-full flex justify-center items-center"
                >
                  <button class="edit-button">Editar</button>
                </nuxt-link>
              </td>
              <td class="whitespace-nowrap  px-6 py-4">
                <button @click="removeBus(bus.id)" class="delete-button">Eliminar</button>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
<!--  <div v-else>-->
<!--    <SharedModal-->
<!--        v-if="overlay"-->
<!--        urlImage="copa"-->
<!--        :message="message"-->
<!--        @close-modal="turnOverlayOff"-->
<!--    />-->
<!--  </div>-->
</template>

<script>
import {getBuses, deleteBus } from "../../helpers/buses";

export default{
  data(){
    return{
      buses: [],
    }
  },
  computed:{
    isThereAnyData(){
      if(this.buses){
        return this.buses.length > 0
      }
    },
  },
  watch:{
    // buses(newValue, oldValue){
    //   if(this.isThereAnyData){
    //     this.loadBuses()
    //   }
    // },

  },
  created() {
    this.loadBuses()
  },
  methods: {
    async loadBuses(){
      try{
        const { data } = await getBuses()
        this.buses = data
        console.log("this.buses")
        console.log(this.buses)
      }catch (e) {
        console.log(e)
      }
    },
    async removeBus( busId ) {
      try{
        console.log("removing bus ")
        await deleteBus( busId )
        this.buses = null
        console.log("Registro eliminado correctamente")
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
.container{
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.52);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
}
button {
  padding: 0 15px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
  transition: 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-size: 10px;
}
.edit-button {
  background-color: rgba(243, 208, 13, 0.82);
  color: #fff;
  box-shadow: 0 10px #a28f4f;
}
.edit-button:hover {
  box-shadow: 0 8px #a2974f;
  transform: translateY(1px);
}
.edit-button:active {
  background-color: #93894a;
  box-shadow: 0 5px #777040;
  transform: translateY(4px);
}


.delete-button {
  background-color: rgba(236, 43, 146, 0.82);
  color: #fff;
  box-shadow: 0 10px #ad1260;
}
.delete-button:hover {
  box-shadow: 0 8px #a40f3c;
  transform: translateY(1px);
}
.delete-button:active {
  background-color: #a11338;
  box-shadow: 0 5px #8a0c32;
  transform: translateY(4px);
}
@media only screen and (min-width: 1000px) {
  button{
    font-size: 18px;
  }
}
</style>