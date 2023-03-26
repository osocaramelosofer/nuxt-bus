<script setup>
import { deleteDestino } from "../../helpers/destinos";
import { useDestinosStore } from "../../store/destinosStore";

const store = useDestinosStore()

defineProps({
  destinos:{ type: Array, required: true}
})

const removeDestino = async( id )=> {
  try {
    const resp = await deleteDestino(id)
    store.deleteDestino(id)
    console.log(store.destinos)
  }catch (e) {
    console.log(e)
  }
}
const remove = async(id)=>{

}

</script>
<template>
  <div class="flex flex-col parent-container">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light w-full">
            <thead
                class="border-b bg-neutral-800 font-medium  dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" class=" px-6 py-4 text-amber-50">#</th>
              <th scope="col" class=" px-6 py-4 text-amber-50">punto de partida</th>
              <th scope="col" class=" px-6 py-4 text-amber-50">punto de llegada</th>
              <th scope="col" class=" px-6 py-4 text-amber-50">Editar</th>
              <th scope="col" class=" px-6 py-4 text-amber-50">Eliminar</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="destino in destinos" :key="destino.id"
                class="border-b dark:border-neutral-500"
            >
              <td class="whitespace-nowrap  px-6 py-4 font-medium">{{ destino.id }}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ destino.origen}}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ destino.destino}}</td>
              <td class="whitespace-nowrap  px-6 py-4">
                <nuxt-link
                    :to="`/conductores/${destino.id}`"
                    class="w-full h-full flex justify-center items-center"
                >
                  <button class="edit-button">Editar</button>
                </nuxt-link>
              </td>
              <td class="whitespace-nowrap  px-6 py-4">
                <button @click="removeDestino(destino.id)" class="delete-button">Eliminar</button>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import { deleteDriver, getDrivers } from "@/helpers/getConductor"
// import { deleteDestino } from "../../helpers/destinos";
//
// export default{
//   props:{
//     destinos:{
//       type: Array,
//       required: true,
//     }
//   },
//   data(){
//     return{
//     }
//   },
//   methods: {
//
//   }
// }
</script>

<style scoped>
.parent-container{
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
  font-size: 18px;
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

</style>