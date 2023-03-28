<template>
<!--  :style="defaultSize"-->
  <div class="block">
    <div class="item-container">
      <img
          class="item"
          src="https://lh3.googleusercontent.com/EQ8s0yKNiLmc8wwYL_Lcpyyw182FsFVaw61rN9-HgAp1dLojFi_6AtuiQzX6in0lgpUCgna5jOwbC5Lp1BZW9Q=s400" alt="item"
      />
    </div>

    <div class="brick-container">
      <div class="brick one" ></div>
      <div class="brick two"></div>
    </div>

    <div class="brick-container">
      <div class="brick three" ></div>
      <div class="brick four relative flex justify-center" >
        <span class=" text-center text-2xl tracking-normal g-font absolute">Trayectos</span>
      </div>
      <div class="brick five" ></div>
    </div>

    <div class="brick-container">
      <div class="brick six" ></div>
      <div class="brick seven" ></div>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    width: { type: String, default: "200"},
    height: { type: String, default: "200"},
  },
  computed:{
    defaultSize(){
      if(this.width && this.height){
        return {
          width: `${this.width}px`,
          height: `${this.height}px`
        }
      }
      return {
        width: `100px`,
        height: `100px`
      }
    }
  },
  return(){},
}
</script>
<style scoped>
.block{
  background-color: #180e08;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  row-gap: .25rem;
  position: relative;
  height: 50px;
  width: 50px;
}
.brick-container{
  height: 34%;
  width: 100%;
  display:flex;
  column-gap:.25rem;
}
.brick{
  background-color: #d57436;
  height: 100%;
  border-radius: .2rem;
}

.one, .two,
.six, .seven {
  width: 50%;
}

.three, .five {
  width: 20%;
}
.four{
  width: 60%;
}
.g-font{
  font-family: 'Paytone One', sans-serif;
  letter-spacing: .5rem;
  color: rgba(255, 255, 255, 0.35);
  transition: all 0.3s;
}
.block:hover .g-font{
  color: white;
  transform: translateY(-10px);
}

.item-container{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: -1;
}
.item{
  position: absolute;
  width: 120px;
  height: 90px;
  transition: all 0.8s;
}
.block:hover .item{
  transform: translateY(-100px);
}
@media only screen and (min-width: 1200px) {
  .block{
    background-color: #180e08;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    row-gap: .25rem;
    position: relative;
    height: 170px;
    width: 170px;
  }
  .brick-container{
    height: 34%;
    width: 100%;
    display:flex;
    column-gap:.25rem;
  }
  .brick{
    background-color: #d57436;
    height: 100%;
    border-radius: .2rem;
  }

  .one, .two,
  .six, .seven {
    width: 50%;
  }

  .three, .five {
    width: 20%;
  }
  .four{
    width: 60%;
  }
  .g-font{
    font-family: 'Paytone One', sans-serif;
    letter-spacing: .5rem;
    color: rgba(255, 255, 255, 0.35);
    transition: all 0.3s;
  }
  .block:hover .g-font{
    color: white;
    transform: translateY(-10px);
  }

  .item-container{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: -1;
  }
  .item{
    position: absolute;
    width: 120px;
    height: 90px;
    transition: all 0.8s;
  }
  .block:hover .item{
    transform: translateY(-100px);
  }
}
</style>