

<template>
  <div>
    <h2>Conductor: {{ driver }} </h2>
    <template v-if="driver">
      <form>
        <div class="relative mb-12" data-te-input-wrapper-init>
          <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="driverName"
              aria-describedby="emailHelp"
              placeholder="Introduce tu nombre"
              :value="driver.nombre"
          />
          <label
              for="driverName"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >Nombre</label
          >
          <small
              id="emailHelp"
              class="absolute w-full text-neutral-500 dark:text-neutral-200"
              data-te-input-helper-ref
          >Introduce tu nuevo nombre</small
          >
        </div>
        <input type="text" v-model="name">t
        <span>{{ driver.nombre }}</span>
        <button
            type="submit"
            class="rounded bg-blue-200 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light">
          Submit
        </button>
      </form>
    </template>


  </div>
</template>

<script>
import { getDriver } from "@/helpers/getConductor"

export default{
  data(){
    return{
      driver: null,
      name: ''
    }
  },
  async created() {
    const { data } = await getDriver(this.$route.params.id)
    console.log("DATA DRIVER", data )
    this.driver = data
    this.name = this.driver.nombre

  }
}

</script>
<style>
</style>