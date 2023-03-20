<template>
  <div class="flex flex-col container">
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
                <button class="delete-button">Eliminar</button>
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

export default{
  props:{
    drivers:{
      type: Array,
      required: true
    }
  },
  data(){
    return{

    }
  },

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
  background-color: rgba(236, 208, 43, 0.82);
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