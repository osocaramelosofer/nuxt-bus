<template>
  <div>
    <div class="px-10">
      <h1 class="text-4xl  text-center bg-white rounded-3xl mb-2 drivers-title">Conductores</h1>
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