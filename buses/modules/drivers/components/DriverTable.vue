<template>
  <div v-if="drivers" class="flex flex-col container">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light w-full">
            <thead
                class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" class=" px-6 py-4">#</th>
              <th scope="col" class=" px-6 py-4">Nombre</th>
              <th scope="col" class=" px-6 py-4">Editar</th>
              <th scope="col" class=" px-6 py-4">Eliminar</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b dark:border-neutral-500"
                v-for="driver in drivers" :key="driver.id"
            >
              <td class="whitespace-nowrap  px-6 py-4 font-medium">{{ driver.id }}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ driver.nombre }}</td>
              <td class="whitespace-nowrap  px-6 py-4">
                <nuxt-link
                    :to="`/conductores/${driver.id}`"
                    class="w-full h-full flex justify-center items-center"
                >
                  <button class="edit-button">Editar</button>
                </nuxt-link>
              </td>
              <td class="whitespace-nowrap  px-6 py-4">
                <button @click="removeDriver(driver.id)" class="delete-button">Eliminar</button>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <SharedModal
        v-if="overlay"
        urlImage="copa"
        :message="message"
        @close-modal="turnOverlayOff"
    />
  </div>
</template>

<script>
import { deleteDriver, getDrivers } from "@/helpers/getConductor"

export default{
  props:{},
  data(){
    return{
      drivers: null,
      overlay: false,
      message: null
    }
  },
  created(){
    this.loadDrivers()
  },
  methods: {
    async loadDrivers(){
      try{
        const { data } = await getDrivers()
        this.drivers = data
      }catch (err){
        console.log(err)
      }
    },
    async removeDriver(id) {
      try{
        const resp = await deleteDriver(id)
        console.log("RESP =>",resp)
            // .then(console.log)
            // .catch(console.log)
      }catch (err){
        console.log(err)
      }
    },
    turnOverlayOff(){
      this.overlay = false
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