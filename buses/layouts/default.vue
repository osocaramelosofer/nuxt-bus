<script setup>
import bienvenida from '@/assets/bienvenida.mp3'
import SwitcherMode from "../components/shared/SwitcherMode";


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
  <div class="bg-red-400 dark:bg-blue-500">
    <nav class="flex py-4 justify-between px-4 items-center">
      <div class="flex items-center">
        <picture
            @click="onPlay"
            class="logo-container cursor-pointer"
        >
          <img class="logo" src="@/assets/logo.png" alt="logo">
        </picture>
        <picture class="img-container">
          <img class="goomba-ico" src="@/assets/goomba.png" alt="goomba" />
        </picture>
      </div>
      <div>
        <nuxt-link class=" dark:bg-black dark:text-white" to="/">Home</nuxt-link>
        <nuxt-link to="/boletos">boletos</nuxt-link>
      </div>
      <div>
        <SharedSwitcherMode />
      </div>
    </nav>
    <main class="dark:bg-dark">
      <slot />
    </main>
  </div>
</template>

<style>
.bg-dark {
  background: rgba(40, 40, 40, 0.91);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.6px);
  -webkit-backdrop-filter: blur(15.6px);
}
.father-container {
   background-image: url("@/assets/busesbros.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
nav{
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.34);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
}
.img-container{
  width: 60px;
  height: 60px;
  display: block;

}
.goomba-ico {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-container{
  width: 180px;
  height: 60px;
  display: block;
}
.logo{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>