<template>
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/blog">Blog</nuxt-link>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
main{
  background-image: url("@/assets/bg2.jpg");
  height: 100vh;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>