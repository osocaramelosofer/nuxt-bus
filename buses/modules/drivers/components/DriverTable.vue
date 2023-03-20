<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light">
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
                    <span class="text-xl font-medium tracking-normal text-yellow-500">
                      Editar
                    </span>
                </nuxt-link>
              </td>
              <td class="whitespace-nowrap  px-6 py-4">
                Eliminar
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