<template>
  <div>
    <div class="px-10">
      <h1 class="text-4xl  text-center bg-white rounded-3xl mb-2">Conductores</h1>
      <DriversAddDriver />
      <DriverTable />
    </div>
  </div>
</template>

<script>
import DriverTable from "../../modules/drivers/components/DriverTable";

export default{
  components:{
    DriverTable
  },
  data(){
    return{

      overlay: true,
      message: null
    }
  },
  created(){},
  methods: {
    turnOff() {
      this.overlay = !this.overlay
    },
  }
}
</script>

<style>

</style>