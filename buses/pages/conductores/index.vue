<template>
  <div>
    <h1 class="text-4xl  text-center">Conductores</h1>
    <template v-if="drivers">
      <DriverTable :drivers="drivers" />
    </template>
    <button class="push-button">Agregar</button>
  </div>
</template>

<script>
import {getConductores} from "@/helpers/getConductor"
import DriverTable from "../../modules/drivers/components/DriverTable";

export default{
  components:{
    DriverTable
  },
  data(){
    return{
      drivers: []
    }
  },
  async created(){
    const { data } = await getConductores()
    this.drivers = data

  },
  methods: {

  }
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