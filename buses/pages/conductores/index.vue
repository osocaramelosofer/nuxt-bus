<template>
  <div>
    <h1 class="text-4xl  text-center">Conductores</h1>
    <div v-if="drivers" class="px-10">
      <DriverTable :drivers="drivers" />
    </div>

    <div v-else>
      <SharedModal
          v-if="overlay"
          urlImage="copa"
          :message="message"
          @close-modal="turnOff"
      />
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
      drivers: null,
      overlay: true,
      message: null
    }
  },
  created(){
    try{
      console.log("trying")
      getConductores()
          .then(console.log)
          .catch( m => this.message = m.message )

    }catch (error) {
      console.error("ERROR ¿¿¿:", error)
    }
    // try {
    //   const data = await getConductores();
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
  },
  methods: {
    turnOff() {
      this.overlay = !this.overlay
    }
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