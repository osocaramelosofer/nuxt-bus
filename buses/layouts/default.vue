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
  <div class="father-container">
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
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/">Blog</nuxt-link>
      </div>
      <div>
        <span>X</span>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
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