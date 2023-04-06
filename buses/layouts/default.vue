<script setup>
import bienvenida from '@/assets/bienvenida.mp3'
import {useLoadingBar} from 'naive-ui'

const loadingBar = useLoadingBar()
const isDark = useDark()
const menuItems = ['boletos', 'buses', 'conductores', 'destinos', 'viajes']
let audio

onMounted(async () => {
  audio = new Audio(bienvenida)
  try {
    await loadingBar.start()
    await setTimeout(() => {
      loadingBar.finish()
    }, 3000)

  } catch (error) {
    console.error(error)
  }
})

const onPlay = () => {
  if (audio.readyState >= 2) {
    audio.play()
  }
}
</script>

<template>

  <div
      :class="[ isDark ? 'bg-dark' : 'father-container' ]"
  >
    <nav class="flex py-4 justify-between px-4 items-center">
      <div class="flex items-center">
        <picture
            @click="onPlay"
            class="logo-container cursor-pointer"
        >
          <img class="logo" src="@/assets/logo.png" alt="logo">
        </picture>
        <picture class="img-container">
          <img class="goomba-ico" src="@/assets/goomba.png" alt="goomba"/>
        </picture>
      </div>
      <div class="flex xl:gap-5">
        <nuxt-link :to="`/`"
                   class=" dark:bg-black dark:text-white menu-item-font"
        >Home
        </nuxt-link>
        <template v-for="(item,index) in menuItems" :key="index">
          <nuxt-link :to="`/${item}`"
                     class=" dark:bg-black dark:text-white menu-item-font"
          >
            {{ item }}
          </nuxt-link>
        </template>
      </div>
      <div>
        <SharedSwitcherMode/>
      </div>
    </nav>
    <main class="dark:bg-dark xl:py-10">
      <slot/>
    </main>
  </div>


</template>

<style>
.bg-dark {
  background: rgba(28, 28, 28, 0.94);
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

nav {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.34);
  /*box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);*/
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  -webkit-box-shadow: 0px 15px 73px -17px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 15px 73px -17px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 15px 73px -17px rgba(0, 0, 0, 0.57);
}

.img-container {
  width: 60px;
  height: 60px;
  display: block;

}

.goomba-ico {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-container {
  width: 180px;
  height: 60px;
  display: block;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.menu-item-font {
  font-family: 'Paytone One', sans-serif;
  font-size: 1.2rem;
}
</style>