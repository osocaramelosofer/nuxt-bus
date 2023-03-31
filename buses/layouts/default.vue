<template>
  <div class="father-container">
    <nav class="flex py-4 justify-between px-4 items-center">
      <div class="flex items-center">
<!--        <span class="text-xl font-semibold text-slate-800">Super Buses Bros</span>-->
        <picture class="logo-container">
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

<!--    <footer>-->
<!--      HTML Reference - A free reference to all HTML5 elements and attributes-->
<!--    </footer>-->
  </div>
</template>

<style>
.father-container {
   background-image: url("@/assets/busesbros.jpg");
  /*background-color: #f1f1f1;*/
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