<template>
  <div id="text" >
    <div class="bg-stone-200 rounded-md inside-container">
      <picture class="block">
        <img
            src="@/assets/toad.png"
            alt="toad.png"
            class="w-full h-full object-cover"
        >
      </picture>
      <button class="push-button">O k</button>
    </div>
  </div>
</template>

<style scoped>
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
}
picture {
  width: 150px;
  height: 150px;

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