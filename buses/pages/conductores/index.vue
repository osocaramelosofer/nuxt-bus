<!--<script setup>-->
<!--import {getConductores} from "@/helpers/getConductor"-->

<!--// const { data:conductores } = await getConductores()-->

<!--// const { data } = await useFetch("http://localhost:8000/api/chofers");-->
<!--// const conductores = data._rawValue;-->

<!--</script>-->

<template>
  <div>
    <h1 class="text-4xl text-white text-center">Conductores</h1>
    <button class="push-button">Agregar</button>
    <v-btn>
      Button
    </v-btn>
    <template>
      <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="desserts"
          item-value="name"
          class="elevation-1"
      ></v-data-table>
    </template>
<!--    <table>-->
<!--      <thead>-->
<!--        <tr>-->
<!--          <th>ID</th>-->
<!--          <th>Nombre</th>-->
<!--        </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--        <tr v-for="conductor in conductores" :key="conductor.id">-->
<!--          <td>{{ conductor.id }}</td>-->
<!--          <td>{{ conductor.nombre }}</td>-->
<!--          <td>-->
<!--            <nuxt-link-->
<!--              :to="`/conductores/${conductor.id}`"-->
<!--              class="w-full h-full flex justify-center items-center"-->
<!--            >-->
<!--              <span-->
<!--                class="text-xl font-medium tracking-normal text-yellow-500"-->
<!--                >Editar</span-->
<!--              >-->
<!--            </nuxt-link>-->
<!--          </td>-->
<!--        </tr>-->
<!--      </tbody>-->
<!--    </table>-->
  </div>
</template>


<script>
export default {
  data () {
    return {
      itemsPerPage: 5,
      headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Calories', align: 'end', key: 'calories' },
        { title: 'Fat (g)', align: 'end', key: 'fat' },
        { title: 'Carbs (g)', align: 'end', key: 'carbs' },
        { title: 'Protein (g)', align: 'end', key: 'protein' },
        { title: 'Iron (%)', align: 'end', key: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22',
        },
      ],
    }
  },
}
</script>
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