<script setup>
import {getConductores} from "@/helpers/getConductor"

const { data:conductores } = await getConductores()

// const { data } = await useFetch("http://localhost:8000/api/chofers");
// const conductores = data._rawValue;

</script>

<template>
  <div>
    <h1 class="text-4xl text-white text-center">Conductores</h1>
    <button class="push-button">Agregar</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="conductor in conductores" :key="conductor.id">
          <td>{{ conductor.id }}</td>
          <td>{{ conductor.nombre }}</td>
          <td>
            <nuxt-link
              :to="`/conductores/${conductor.id}`"
              class="w-full h-full flex justify-center items-center"
            >
              <span
                class="text-xl font-medium tracking-normal text-yellow-500"
                >Editar</span
              >
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style>
button {
  margin: 40px;
  padding: 0 50px;

  height: 60px;
  border-radius: 15px;
  border: none;

  color: #fff;

  transition: 0.3s ease;

  font-family: "Poppins", sans-serif;
  font-size: 24px;
}
.push-button {
  background-color: #57b894;

  box-shadow: 0 10px #4fa283;
}
.push-button:hover {
  box-shadow: 0 8px #4fa283;
  transform: translateY(1px);
}
.push-button:active {
  background-color: #4a9377;
  box-shadow: 0 5px #407762;
  transform: translateY(4px);
}
</style>