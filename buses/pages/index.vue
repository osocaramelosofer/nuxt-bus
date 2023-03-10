<template>
  <main class="p-7">
    <div class="wrapper">
      <div class="container one">one</div>
      <div class="container two">two</div>
      <div class="container three">three</div>
      <div class="container four">four</div>
      <div class="container five">five</div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
main{
  background-image: url("@/assets/bg2.jpg");
  height: 100%;
  width:100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.wrapper{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 25px;

}
.container{
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.41);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.2px);
  -webkit-backdrop-filter: blur(13.2px);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1/3;

  background-color: #01d77ed0;
  filter: blur(2px);

}
.two {
  grid-column: 3 / 4;
  grid-row: 1 / 3;

}
.three {
  grid-column: 1 / 2;
  grid-row: 3 / 4;

}
.four {
  grid-column: 2;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
</style>