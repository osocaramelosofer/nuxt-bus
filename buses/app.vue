<script setup>
import { NLoadingBarProvider } from 'naive-ui'

</script>
<template>
  <n-loading-bar-provider>
    <div class="init">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </n-loading-bar-provider>

</template>

<style>
*, html{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.init{
  width: 100%;
  height: 100%;
}
</style>