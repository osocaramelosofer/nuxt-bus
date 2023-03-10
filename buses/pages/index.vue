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
  height: 100vh;
  width:100vw;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.wrapper{
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
.container{
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.41);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.2px);
  -webkit-backdrop-filter: blur(13.2px);
}
.one {
  /* grid-column: 1 / 3;
  grid-row: 1/3; */



}
/*
.two {
  grid-column: 3 / 4;
  grid-row: 1 / 3;

} */
/* 
.three {
  grid-column: 1 / 2;
  grid-row: 3/5;

}
.four {
  grid-column: 2;
  grid-row: 3/5;
}
.five {
  grid-column: 3/4;
  grid-row: 3/5;
} */
/* 320px, 768px, and 1200px */
@media only screen and (min-width: 1200px){
  .wrapper{
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 200px);
  }
  .one {
    background-color: #01d77ed0;
    grid-column: span 2;
    grid-row: 1/3;
  }
  .two{
    grid-column: span 1;
    grid-row: span 2;
  }

}
</style>