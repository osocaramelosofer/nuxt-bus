
<template>
  <div class="parent-container flex items-center justify-center">
    <img class="question-brick" src="@/assets/questionBrick.png">
    <span class="item-name absolute">
      <slot/>
    </span>
  </div>
</template>

<style scoped>
.parent-container{
  height: 50px;
  width: 50px;
}
.question-brick{
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 85%;
}
.item-name{
  font-family: 'Paytone One', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.73);
  letter-spacing: .4rem;
  transition: all 0.3s;
}
.parent-container:hover .item-name{
  color: white;
  transform: translateY(-10px);
}

@media only screen and (min-width: 1200px) {
  .parent-container{
    height: 165px;
    width: 165px;
  }
}
</style>