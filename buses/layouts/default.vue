<template>
  <div class="father-container">
    <nav>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/">Blog</nuxt-link>
    </nav>
    <main class="my-2">
      <slot />
    </main>

    <footer>
      HTML Reference - A free reference to all HTML5 elements and attributes
    </footer>
  </div>
</template>

<style>
.father-container {
  /* background-image: url("@/assets/bg2.jpg"); */
  height: 100vh;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
nav{
  /* From https://css.glass */
  background-color: #01d77ed0;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.2px);
-webkit-backdrop-filter: blur(3.2px);
border: 1px solid rgba(255, 127, 0, 0.21);
}
</style>