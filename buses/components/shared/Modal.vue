<template>
  <div id="overlay"
       :style="[showModal ? 'display:block' : 'display:none']">
    <div id="text" >
      <div class="bg-stone-200 rounded-md inside-container">
        <div class="block relative image-container">
          <img
              :src="imageSrc"
              alt="toad.png"
              class="w-full h-full object-contain image"
          >
          <p class="text-center text-sm font-bold">
            <slot />
          </p>
        </div>
        <button class="push-button" @click="toggleModal">O k</button>
      </div>
    </div>
  </div>
</template>

<script>
import copa from '@/assets/copa.png'
import toad from '@/assets/toad.png'
import osomario from '@/assets/osomario.png'

export default{
  props:{
    urlImage: { type: String, default:"toad.png" },
    onClick: { type: Function  },
  },
  data(){
    return{
      showModal: true,
    }
  },
  computed: {
    imageSrc() {
      if(this.urlImage.startsWith("copa"))
        return copa
      if(this.urlImage.startsWith("osom"))
        return osomario
      return toad
    },
  },
  methods:{
    toggleModal(){
      this.showModal = false
      if(this.onClick){
        this.onClick()
      }
    }
  }
}
</script>

<style scoped>
#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);

  border-radius: 10px;
  padding: 60px 40px;

}
.inside-container{
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 44px;
  row-gap: 18px;
  position: relative;
}
.image-container {
  width: 180px;
  height: 185px;
  display: flex;
  align-items: center;
}
.image {
  position: absolute;
  left: -91px;
  top: -121px;
}

.message{

}
button {
  padding: 0 15px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
  transition: 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}
.push-button {
  background-color: #57b894;

  box-shadow: 0 10px #4fa283;
}
.push-button:hover {
  box-shadow: 0 8px #4fa283;
  transform: translateY(1px);
}
.push-button:active {
  background-color: #4a9377;
  box-shadow: 0 5px #407762;
  transform: translateY(4px);
}


</style>