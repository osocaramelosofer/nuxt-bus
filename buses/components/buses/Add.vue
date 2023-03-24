<template>
  <form v-on:submit.prevent="onSubmit" class="bg-white form-container" >
    <div class="second-container">
      <span class="font-bold text-xl add-driver">
        Añadir Bus
      </span>
      <p>
        <input id="inputName"
               type="text"
               placeholder="Introduce tu nombre aqui"
               class="font-semibold text-neutral-600"
               v-model.trim="driverName"
        />
      </p>
      <button class="save-button">Guardar</button>
    </div>
  </form>
</template>

<script>
import { addBus } from "@/helpers/buses";

export default {
  data(){
    return{
      driverName: '',
    }
  },
  methods:{
    async onSubmit(){
      try {
        const resp = await addBus( this.driverName )

      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
.form-container{
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
  margin-bottom: 8px;
}
.second-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 35px 15px;
}
.add-driver{
  max-width: 200px;
}
#inputName {
  outline: none;
  border-radius: 20px;
  padding: 5px 8px;
}
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
.save-button {
  background-color: #57b894;

  box-shadow: 0 10px #4fa283;
}
.save-button:hover {
  box-shadow: 0 8px #4fa283;
  transform: translateY(1px);
}
.save-button:active {
  background-color: #4a9377;
  box-shadow: 0 5px #407762;
  transform: translateY(4px);
}

@media only screen and (min-width: 800px) {
  .second-container{
    flex-direction: row;
    align-items: center;
  }
  #inputName{
    min-width: 600px;
  }
}
@media only screen and (min-width: 1000px) {

}
</style>