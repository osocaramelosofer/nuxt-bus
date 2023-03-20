<template>
  <div class="grid-container">
    <div class="item one">
      <nuxt-link to="/conductores" class="w-full h-full flex justify-center items-center">
        <span class="text-2xl font-bold tracking-normal text-emerald-500">Trayectos</span>
      </nuxt-link>
    </div>
    <div class="item two">two</div>
    <div class="item three">
      <nuxt-link to="/conductores" class="w-full h-full flex justify-center items-center">
        <span class="text-2xl font-bold tracking-normal text-emerald-500">Pasajeros</span>
      </nuxt-link>
    </div>
    <div class="item four">
      <nuxt-link to="/conductores" class="w-full h-full flex justify-center items-center">
        <span class="text-2xl font-bold tracking-normal text-emerald-500">Buses</span>
      </nuxt-link>
    </div>
    <div class="item five">
      <nuxt-link to="/conductores" class="w-full h-full flex justify-center items-center">
        <span class="text-2xl font-bold tracking-normal text-emerald-500">Conductores</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.grid-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(4, 100px);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  /*
  grid-auto-rows: minmax(100px, auto); Esto se para cuando se defina automaticamente una row extra ponerle el tamano establecido por defecto  */
  /* grid-auto-columns: minmax(100px, auto); */
  grid-auto-rows: 100px;
  grid-gap: 25px;
  align-content: center;
}
.item {
  border-radius: 10px;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
}
.item:hover{
  /*background-color: #01d77ed0;*/
  background-color: #01d77ed0;
  cursor: pointer;
  color: white;
}
.item:hover span{
  color: white;
}
/* 320px, 768px, and 1200px */
@media only screen and (min-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 200px);
  }
  .one {
    grid-column: span 2;
    grid-row: 1/3;
  }
  .two {
    grid-column: span 1;
    grid-row: span 2;
  }
}
</style>