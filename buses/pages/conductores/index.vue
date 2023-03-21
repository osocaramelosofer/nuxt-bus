<template>
  <div>
    <h1 class="text-4xl  text-center">Conductores</h1>
    <div v-if="drivers" class="px-10">
      <DriverTable :drivers="drivers" />
    </div>

    <div v-else>
      <SharedModal urlImage="copa" message="ops! parece que hubo un problema" />
    </div>
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
      drivers: null
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
  padding: 0 15px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
  transition: 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}


</style>