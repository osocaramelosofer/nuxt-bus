<script setup>

const emit = defineEmits(['onSeatSelected'])

const props = defineProps({
  asientos: { type: Array, default:[]},
  selectedSeat: {type: Number},
})

const sortedSeats = computed(() => {
  return props.asientos.sort((a, b) => a.numero - b.numero);
})

</script>
<template>
  <div class="w-full bg-white flex gap-3 p-3 flex flex-col">
    <h2 class="g-font text-center text-3xl">Selecciona tu asiento</h2>
    <div class="flex gap-5">
      <small class="font-bold">libre</small>
      <div class="seats-example libre"></div>

      <small class="font-bold">ocupado</small>
      <div class="seats-example ocupado"></div>
    </div>
  </div>
  <div v-if="sortedSeats" class="bg-white">
    <ul class="bus-container">
      <li
          v-for="(asiento, index) in sortedSeats"
          :key="index"
          class="seat"
          :class="{'ocupado': asiento.estado === 'ocupado', 'libre': asiento.estado === 'disponible'}"
          @click="$emit('onSeatSelected', asiento.numero)"
          tabindex="0"
      >
        <span class="g-font">{{ asiento.numero }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.bus-container{
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 320px;
  flex-direction: column;
  gap: 5px;
  justify-content: space-around;
  align-items: center;
  padding: 10px 50px;
}
.seat{
  min-width: 50px;
  min-height: 55px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.g-font {
  font-weight: bold;
  font-family: 'Paytone One', sans-serif;
  color: rgba(59, 59, 59, 0.76);
}
.ocupado {
  background-color: #919191;
}
.libre {
  background-color: #badbe5;
}
li:focus {
  background-color: #64d3fc;
}
.seats-example {
  width: 20px;
  height: 25px;
  border-radius: 4px;
}
@media only screen and (min-width: 1000px) {
  .bus-container{
    justify-content: space-around;
    align-content: center;
    gap: 20px;
    max-height: 420px;
  }

}
</style>