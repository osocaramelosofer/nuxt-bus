<script setup>
import bienvenida from '@/assets/bienvenida.mp3'

let audio

onMounted(async () => {
  audio = new Audio(bienvenida)
})

const onPlay = () => {
  if (audio.readyState >= 2) {
    audio.play()
  }
}
</script>

<template>
  <div class="grid-container">
    <div class="item one">
      <nuxt-link to="/boletos" class="w-full h-full flex justify-center items-center">
        <SharedBrick>
          Boletos
        </SharedBrick>
      </nuxt-link>
    </div>

    <div class="item two relative">
      <img src="@/assets/yoshimario.png"
           alt="mario-with-yoshi"
           class="absolute mario-yoshi "
      >
      <nuxt-link to="/viajes" class="w-full h-full flex justify-center items-center">
        <SharedBrick>
          Viajes
        </SharedBrick>
      </nuxt-link>
    </div>
    <div class="item three">
      <img src="@/assets/brothers.png"
           alt="mario-luigui"
           class="absolute item-image mario-luigui"
      >
      <nuxt-link to="/destinos" class="w-full h-full flex justify-center items-center">
        <SharedBrick>
          Destinos
        </SharedBrick>
      </nuxt-link>
    </div>

    <div class="item four relative">
      <img src="@/assets/oruga.png"
           alt="oruga"
           class="absolute oruga z-10"
      >
      <nuxt-link to="/buses" class="w-full h-full flex justify-center items-center">
        <SharedBrick>
          Buses
        </SharedBrick>
      </nuxt-link>
    </div>

    <div class="item five relative">
      <img src="@/assets/lilmario.png"
           alt="little-mario"
           class="absolute item-image little-mario"
      >
      <nuxt-link to="/conductores" class="w-full h-full flex justify-center items-center">
        <SharedBrick>
          Conductores
        </SharedBrick>
      </nuxt-link>
    </div>

  </div>
</template>


<style scoped>
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

.item:hover {
  /*background-color: #01d77ed0;*/
  background-color: #01d77ed0;
  cursor: pointer;
  color: white;
}

.item:hover span {
  color: white;
}

.oruga {
  width: 130px;
  right: -13px;
}

.item-image {
  width: 100px;
  right: 10px;
}

.mario-yoshi {
  width: 100px;
  left: -17px;
}

.little-mario {
  width: 86px;
  right: -8px;
  bottom: 0;
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

  .oruga {
    width: 192px;
    top: 60px
  }

  .item-image {
    width: 130px;
    right: -13px;
  }

  .mario-yoshi {
    bottom: -3px;
    width: 183px;
  }

  .mario-luigui {
    width: 160px;
  }
}
</style>