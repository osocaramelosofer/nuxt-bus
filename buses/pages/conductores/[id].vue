

<template v-if="driver.id">
  <div id="overlay" onclick="off()">
    <div id="text">Overlay Text</div>
  </div>


  <form v-on:submit.prevent="onSubmit">
    <div class="root">
      <h2>Editar conductor</h2>
      <p>
        <input type="text" placeholder="Nombre" :value="$route.params.id" disabled class="bg-gray-50 px-2" />
      </p>
      <small>El id no se puede editar.</small>
      <p>
        <input type="text" placeholder="Nombre" v-model.trim="name"  />
      </p>
      <small>Este es tu nombre actual, y puedes editarlo.</small>
      <button class="save-button">Guardar</button>

    </div>
  </form>

<!--  <template>-->
<!--    <div class="text-center">-->
<!--      <v-btn-->
<!--          color="error"-->
<!--          @click="overlay = !overlay"-->
<!--      >-->
<!--        Show Overlay-->
<!--      </v-btn>-->


<!--    </div>-->
<!--  </template>-->
</template>


<script>
import { getDriver,updateDriver } from "@/helpers/getConductor"


export default{
  data(){
    return{
      driver: null,
      name: '',
      overlay: true,
    }
  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    },
  },
  async created() {
    const { data } = await getDriver(this.$route.params.id)
    console.log("DATA DRIVER", data )
    this.driver = data
    this.name = this.driver.nombre

  },
  methods:{
    async onSubmit(){
      const resp = await updateDriver({id: this.driver.id, nombre: this.name})
      console.log("RESPUESTA PUT >=======()>",resp)
    }
  }
}

</script>
<style lang="css" scoped>
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}
small{
  color: #9d9d9d;
}
.save-button {
  background-color: #3498db;
  padding: 0 20px;
  margin-top: 10px;
  box-shadow: 0 10px #4f7da2;
  color: #fff;
}
.save-button:hover {
  box-shadow: 0 8px #3c6b7c;
  transform: translateY(1px);
}
.save-button:active {
  background-color: #376781;
  box-shadow: 0 5px #26586e;
  transform: translateY(4px);
}
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>
